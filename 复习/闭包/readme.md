# 什么是闭包
- 函数执行后返回的结果是一个内部函数,如果内部函数持有执行函数作用域的变量,就形成了闭包

# 闭包原理

在预编译阶段，如果内部函数使用了外部函数的变量，则会在内存中创建一个闭包对象并保持对应的变量值

执行完成之后，函数执行上下文会被销毁,函数对闭包的引用也会被销毁,但是其内部函数还持有闭包的引用,所以内部函数可以继续使用外部函数的变量

利用了函数作用域链的原理,一个内部定义的函数会将包含外部函数的活动对象添加到它的作用域当中,
函数执行完毕，其执行作用域链销毁,但内部函数的作用域依然在引用这个活动对象，直到内部函数销毁之后才会销毁这个对象