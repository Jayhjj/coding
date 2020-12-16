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
      console.log(res)
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
module.exports = router
