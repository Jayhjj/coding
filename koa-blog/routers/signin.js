const router = require('koa-router')();
const controller = require('../controller/c-signin.js')
// router.post('/signin',(ctx) => {
//     //展示登录界面
//     ctx.body = 'signin'
//     controller
// })
router.get('/signin',controller.postSign)

module.exports = router