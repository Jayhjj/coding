const koa = require('koa');
const koaView = require('koa-view');
const router = require('koa-router');

const app = new koa();
const path = require('path')
const viewPath = path.join(__dirname,'./view')
app.use(koaView(viewPath,{
    extension:'ejs'  // 模板引擎  约等于 vue template
}))

router.get('./',async(ctx) => {
    let xss = `<h2>xss</h2> <img onerror = "alert(123);" src = "xss" `
    function toString(html){
        return html.replace(/</g,'&lt;').replace(/</g,'&lt;')
    }
    await ctx.render('xss',{
       xssCode:toString(xss)
   }) 
})

app.use(router.routers()).use(router.allowdMethods())

app.listen(8080,() => {
    console.log(8080);
})