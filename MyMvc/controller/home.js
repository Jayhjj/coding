// module.exports = {
//     index:async(ctx) => {
//         ctx.body = 'Ctrl Index'
//     },
//     detail:async(ctx) => {
//         ctx.body = 'Crtl Detail'
//     }
// }
module.exports = app => ({
    'get /':app.$ctrl.home.index,
    'get /detail':app.$ctrl.home.detail
})