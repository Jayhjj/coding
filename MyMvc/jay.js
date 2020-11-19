const Koa = require('koa')
const {initRouter,initController,initService} = require('./jay-loader')

class jay {
    constructor(conf){
        this.$app = new Koa(conf)
        this.$ctrl = initController(this)
        this.$service = initService()
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())
    }
    start(port){
        this.$app.listen(port,() => {
            console.log('jay服务器启动成功,端口为' + port);
        })
    }
}
module.exports = jay