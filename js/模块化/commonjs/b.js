const mod = require('./a');
console.log(mod.c);//3
mod.inc();

// 导入的值就是把导出的值拷贝一份过来
//2.如果一个模块被require了两次，它会把上一次的结果缓存起来，只执行一次
console.log(mod.c);//3