const User_col = require('../models/user')
const Password_col = require('../models/password')
const passport = require('../utils/passport')
const login = async (ctx) => {
  console.log(ctx.request.body);
  let req = ctx.request.body
  // 连接数据库，去数据库里查找是否存在该条数据
  // 查找语句
  // 获取用的userId

  const user = await User_col.findOne({
    account: req.username
  }, {
    __v: 0,
    _id: 0
  })
  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return
  }

  // 能找到这个账号
  const userId = user.userId

  // 查密码
  const pass = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })
  // 如果在密码表里面找到了账号相同的id
  // 判断该id对应的密码和前端传过来的密码是否匹配
  const math = await passport.validate(req.password,pass.hash)
  ctx.status = 200
  if(match){
    ctx.body = {
      code:1,
      msg:'login sucess',
      data:user
    }
    return;
  }
  ctx.body = {
    code:0,
    msg:'密码错误'
  }
}

module.exports = {
  login
}