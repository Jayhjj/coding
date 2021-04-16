const Koa = require('koa');
const app = new Koa();

// response
app.use((req,res) => {
    res.end('hello')
});

app.listen(3000);