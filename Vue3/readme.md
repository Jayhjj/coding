# vue3.0 , vue2.0 的区别
1. template里面不在需要唯一的根节点，减少了没意义的DOM
2. 使用Composition API (2.0 使用的是options API)
3. 完美支持treeshoking(用不上的就不打包)

组件:
fragment : 不在需要一个无用的根节点
teleport : 可以指明DOM节点的插入
suspense : 更好的实现异步组件