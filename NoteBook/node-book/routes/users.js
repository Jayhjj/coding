const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig');
router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

//登录接口
router.post('/userLogin',async(ctx,next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  //把参数拿到数据库里面查询
  await userService.userLogin(_username,_userpwd).then((res) => {
      console.log(res);
      let r = '';
      if(res.length){
        r = 'ok';
        let result = {
          id: res[0].id,
          username: res[0].username,
          nickname: res[0].nickname
        }
        ctx.body = {
          code:'80000',
          data:result,
          mess:'登录成功'
        }
      }else{
        r = 'error';
        ctx.body = {
          code:'80004',
          data:r,
          mess:'账号或密码错误'
        }
      }
  }).catch(err => {
    // console.log(err);
    ctx.body = {
      code:'80002',
      data:err
    }
  })
  
})

//注册接口
router.post('/userRegister',async(ctx,next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname;
  if(!_username || !_userpwd || !_nickname){ //前后端都要校验
    ctx.body = {
      code:'80001',
      mess:'用户名密码和昵称不能为空'
    }
    return
  }
  // 此时要去数据库查询是否有同样的用户
  await userService.findUser(_username).then(async(res) => {
    // console.log(res);
    if(res.length){
      ctx.body = {
        code:'80003',
        mess:'用户名存在'
      }
    }else{
      await userService.insertUser([_username,_userpwd,_nickname]).then(res => {
        // console.log(res);
        let r = '';
        if(res.affectedRows !== 0){
          r = 'ok';
          ctx.body = {
            code:'80000',
            data:r,
            mess:'注册成功'
          }
        }else{
          r = 'error';
          ctx.body = {
            code:'80004',
            data:r,
            mess:'注册失败'
          }
        }
      })
    }
  })

})

//查找文章列表接口
router.post('/findNoteListByType',async(ctx,next) => {
  let note_type = ctx.request.body.note_type
  await userService.findNoteListByType(note_type).then(res => {
    console.log(res);
    let r = ''
    if(res.length){
      r = 'ok';
      ctx.body = {
        code:'80000',
        data: res,
        mess:'查找成功'
      }
    }else{
      r = 'error',
      ctx.body = {
        code:'80004',
        data: r,
        mess:'查找失败'
      }
    }
  })
})

//根据id查找对应的文章详情
router.post('/findNoteDetailById',async(ctx,next) => {
  let note_id = ctx.request.body.note_id
  await userService.findNoteDetailById(note_id).then(res => {
    let r = ''
     if(res.length){
      r = 'ok';
      ctx.body = {
        code:'80000',
        data: res[0],
        mess:'查找成功'
      }
    }else{
      r = 'error',
      ctx.body = {
        code:'80004',
        data: r,
        mess:'暂无数据'
      }
    }
  })
})
module.exports = router
