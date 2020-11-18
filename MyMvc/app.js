// const app = new (require('koa'))()
// const {initRouter} = require('./jay-loader')
// app.use(initRouter().routes())
// app.listen(3000)

const jay = require('./jay')
const app = new jay()

app.start(3000)     