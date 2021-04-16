# loader 和 plugin  的区别
webpack只能识别js loader起到翻译官的作用，将其他的资源进行转译处理(本质上是函数，并不会扩展webpack功能)

plugin是插件，可以扩展webpack的功能，在webpack运行的生命周期中广播事件


# webpack构建的简单流程
1. 初始化参数
2. 开始编译，加载配置的插件
3. 确认入口文件
4. 编译模块  (model) 
5. 完成模块编译
6. 输出资源
7. 完成输出 (把打包好的内容输入到文件系统)


# 使用webpack开始时，用过哪些可以提高效率的插件

webpack-dashboard:  友好的展示打包信息
webpack-merge: 提取公共配置，减少重复配置代码
HotMoudleReplacementPlugin: 模块热更新
size-plugin: 监控体积变化尽早发现问题

# suorce map 是什么? 生产环境怎么用
将打包压缩编译之后的代码映射回源代码的过程,为了在压缩之后还能很好的调试代码

hidden-source-map: 借助第三方错误监控平台sentry使用

sourcemap: 通过nginx设置将.map文件只对白名单开发(公司内网)

# webpack热更新的原理

HMR的核心就是客户端从服务端去拉取更新后的文件
1. 服务端与客户端维护了一个webSocket连接
2. 当本地资源变化的时候,也就是服务端发生变化的时候，WDS就会向浏览器推送更新,并且带上hash值
3. 客户端对比上一次的资,发现真的有更新
4. 客户端发ajax请求获取更新内容