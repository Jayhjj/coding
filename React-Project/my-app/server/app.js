const Koa = require('koa')
const app = new Koa()
var cors = require('koa2-cors')
app.use((ctx,next) => {
    if(ctx.url === '/list'){
        console.log(ctx.url);
        ctx.body=['hello','jay','zhou']
    }
})
app.use(cors())
app.listen(3001)