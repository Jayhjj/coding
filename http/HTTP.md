# HTTP 请求由三部分构成
1. 请求头
2. 请求行 (GET /images/logo.png HTTP/1.1)
3. 实体

GET 和 POST 区别
1. GET 能缓存，POST不能
2. POST 比 GET 更安全一点点，是因为GET请求的参数默认包含在URL里(当然你想放在body里面也行)，且会被浏览器保存历史记录，POST不会
3. 因为浏览器URL地址长度的限制导致GET请求会受到影响
4. POST支持更多的编码类型，且不对数据类型限制

常见的状态码