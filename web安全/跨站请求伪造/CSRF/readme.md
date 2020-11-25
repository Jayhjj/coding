## 登录
cookie 保存用户信息，后续一段时间都不用在登录
api.juejin.cn
api.juejin.cn/delete/01  验证用户身份(cookie 后端能验证)

另外一个黑客域名下面也请求 api.juejin.cn

1. xhr fetch 跨域了, 不能伪造这个请求
2. Get:script img link   POST:form 就能伪造出来了(后端无法拿到cookie)


cookie不能跨域: 最新chrom提出来的 sameSite 为 strict

1.sameSite 设置 为 strict ,lax
2. 用户登录成功的时候给他一个token，之后前端每个请求都带上这个token，黑客网站是拿不到token，它的请求没token就拒绝它