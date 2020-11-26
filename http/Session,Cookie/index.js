
const Koa = require('koa');
const path = require('path');
const router = require('koa-router')();
const app = new Koa();

router.get('/', async (ctx) => {
    const fs = require('fs');
    const html = fs.readFileSync('./index.html', 'utf-8')
    ctx.body = html;
})
router.get('/login', async (ctx) => {
})
router.get('/islogin', async (ctx) => {
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(9090, () => {
    console.log('server is running 9090');
});

