1. 首先,用户从浏览器进程里输入请求信息
2. 然后,网络进程发起URL请求
3. 服务器响应URL请求之后，浏览器进程就又要开始准备渲染进程了
4. 渲染进程准备好了之后,需要先向渲染进程提交页面数据,我们统称为提交文档阶段
5. 渲染进程接收完文档之后,便开始解析页面和加载子资源,完成页面的渲染

这其中，用户发出 URL 请求到页面开始解析的这个过程，就叫做导航。

# 从输入 URL 到页面展示

 1. 用户输入
 当用户在地址栏中输入一个查询关键字时,地址栏会判断输入的关键字是搜索内容,还是请求内容的URL

 - 如果是搜索内容,地址栏会使用浏览器默认的引擎，来合成新的带搜索关键字的URL
 - 如果判断输入的内容符合URL规则,比如输入的是time.geekbang.org,那么地址栏会根据规则,把这段内容加上协议,合成为完整的URL,如'http://time.geekbang.org'

 2. URL的请求过程
 