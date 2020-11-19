module.exports = {
    'get /':async (app) => {
        const name = await app.$service.getName
        app.ctx.body = '用户' + name
    },
    'get /detail':async (app) => {
        const age = await app.$service.getAge
        app.ctx.body = '用户年龄' + age
    }
}