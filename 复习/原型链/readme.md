# 简单说一下原型链
每个函数都有 prototype 属性,该属性指向原型,原型就是创建该函数的工厂

每个对象都有_proto_属性,指向创建该对象的构造函数的原型,其实这个属性指向的是[[prototype]]，但是[[prototype]]是内部属性,所以用_proto_来访问

对象可以通过_proto_ 来寻找不属于该对象的属性,_proto_将对象连接起来就组成了原型链
# 打个通俗的比方，可以把原型链理解成一个家族的血亲关系，每一个后代都会从父代身上继承该家族特有的基因和特征。

# 怎么判断对象类型
instanceof
Object.prototype.toString.call()  [object,Type]

# 箭头函数的特点
箭头函数没有this，(它指向的是外层没有箭头函数的函数) 箭头函数里面的this取决与他外面的第一个不是箭头函数的函数的this

# async await 的优缺点
先描述 async await 的作用和外什么有这个作用;
优势在于处理promise.then的调用链,代码更清晰
缺点在于await会阻塞代码执行，滥用会导致性能问题

awit 内部实现了generator,generator 会保存栈或者堆中的数据


# generator 原理


# promise



# == 和 === 区别 ,什么情况下用 ==

[] == ![]  true



