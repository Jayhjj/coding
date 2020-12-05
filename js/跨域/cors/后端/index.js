const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(async(ctx,next) => {
    ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8080');
    ctx.set('Access-Control-Allow-Headers','content-type');
    ctx.set('Access-Control-Expose-Headers','X-baidu');
    //非简单请求 发一个 请求方式 是 options 的预检请求
    //prefight的请求结果能够被缓存多久
    ctx.set('Access-Control-Max-Age',60*60);
    ctx.set('Access-Control-Allow-Credentials',true);//允许后端拿前端的cookie
    //允许请求的方法有那些
    ctx.set('Access-Control-Allow-Methods','*');
    await next()
})
router.post('/', (ctx, next) => {
  // ctx.router available
  ctx.set('Content-Type','application/json');
  ctx.set('X-baidu','xxxxx');
  console.log()
  ctx.body = {
      code:0
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(9090,() => {
      console.log('8080000')
  })