1. 介绍一下Js的执行上下文
    简而言之，执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。
    JavaScript 中有三种执行上下文类型：
    全局执行上下文 ，
    函数执行上下文 ，
    Eval 函数执行上下文

    执行栈，也就是在其它编程语言中所说的“调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。

2. 介绍一下Js的作用域链
   
  查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

   https://blog.csdn.net/yooungt13/article/details/20581635
	    · 当代码在一个环境中执行时，会创建变量对象的一个作用域链,
		举例子：var name ="Tom"
			function sayHi () {
			    alert('Hi,'+name)
			}
			sayHi()  //Hi, Tom
		函数sayHi()的执行环境为全局环境，所以它的变量对象为window。当函数执行到name时，先查找局部环境，找到则换回，否则顺着作用域查找，在全局环境中，
		找到name返回，这一查找变量的有序过程的依据就是作用域。
	
	    · 作用域链是保证执行环境有权访问的所有变量和函数的有序访问



3. 介绍一下Js闭包
    一句话可以概括：闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数的作用域不会被释放。
    内部函数可以访问定义他们外部函数的参数和变量。（作用域链的向上查找，把外围的作用域中的变量值存储在内存中而不是在函数调用完毕后销毁）设计私有的方法和变量，避免全局变量的污染
	函数嵌套函数
	本质是将函数内部和外部连接起来。优点是可以读取函数内部的变量，让这些变量的值始终保存在内存中，不会在函数被调用之后自动清除
   闭包的缺陷：
		1.闭包的缺点就是常驻内存会增大内存使用量，并且使用不当容易造成内存泄漏
		2.如果不是因为某些特殊任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。   


   内存溢出和内存泄漏（给的不够用| 用了不归还）
	内存溢出：在程序中申请内存时，没有足够的内存空间供其使用，出现out of memory；比如申请了一个integer,但给它存了long才能存下的数，那就是内存溢出
	内存泄漏：在程序申请内存后，无法释放已申请的内存空间，一次内存泄漏危害可以忽略，但内存泄漏堆积后果很严重，无论多少内存，迟到会被占光

   举列子：闭包中的this,对象函数。匿名函数返回函数return function


4. 介绍一下Js里面的的this
    在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。如果函数独立调用，那么该函数内部的this，则指向undefined。但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象。

    1.当函数作为对象的方法被调用时，this就会指向该对象。
	2.作为普通函数，this指向window。
	3.构造器调用，this指向返回的这个对象。
	4.箭头函数  箭头函数的this绑定看的是this所在函数定义在哪个对象下，就绑定哪个对象
      		    如果有嵌套的情况，则this绑定到最近的一层对象上

		this指向的固定化，并不是因为箭头函数内部有绑定this的
		机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外
		层代码块的this。正是因为它没有this，所以也就不能用作构造函数。

5. 怎么改变this的指向呢？ 
   1.使用es6的箭头函数；2.在函数内部使用that = this；3.使用apply，call，bind； 4.new实例化一个对象


6. call 和 apply 有什么区别
   相同点：
1、call和apply的第一个参数thisArg，都是func运行时指定的this。而且，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
2、都可以只传递一个参数。
不同点：apply只接收两个参数，第二个参数可以是数组也可以是类数组，其实也可以是对象，后续的参数忽略不计。call接收第二个及以后一系列的参数。
严格模式下，函数的this值就是call和apply的第一个参数thisArg，非严格模式下，thisArg值被指定为 null 或 undefined 时this值会自动替换为指向全局对象，原始值则会被自动包装，也就是new Object()。

重新认识了call和apply会发现：它们作用都是一样的，改变函数里的this指向为第一个参数thisArg，如果明确有多少参数，那可以用call，不明确则可以使用apply。也就是说完全可以不使用call，而使用apply代替。
也就是说，我们只需要模拟实现apply，call可以根据参数个数都放在一个数组中，给到apply即可。


7. 谈谈你对 JS 原型和原型链的理解？

JS 原型是指为其它对象提供共享属性访问的对象。在创建对象时，每个对象都包含一个隐式引用指向它的原型对象或者 null。

原型也是对象，因此它也有自己的原型。这样构成一个原型链。

8. 原型链有什么作用？

在访问一个对象的属性时，实际上是在查询原型链。这个对象是原型链的第一个元素，先检查它是否包含属性名，如果包含则返回属性值，否则检查原型链上的第二个元素，以此类推。

9. 那如何实现原型继承呢？
有两种方式。一种是通过 Object.create 或者 Object.setPrototypeOf 显式继承另一个对象，将它设置为原型。

另一种是通过 constructor 构造函数，在使用 new 关键字实例化时，会自动继承 constructor 的 prototype 对象，作为实例的原型。

在 ES2015 中提供了 class 的风格，背后跟 constructor 工作方式一样，写起来更内聚一些。

10. ConstructorB 如何继承 ConstructorA ？
JS 里的继承，是对象跟对象之间的继承。constructor 的主要用途是初始化对象的属性。
因此，两个 Constructor 之间的继承，需要分开两个步骤。
第一步是，编写新的 constructor，将两个 constructor 通过 call/apply 的方式，合并它们的属性初始化。按照超类优先的顺序进行。
第二步是，取出超类和子类的原型对象，通过 Object.create/Object.setPrototypeOf 显式原型继承的方式，设置子类的原型为超类原型。
整个过程手动编写起来比较繁琐，因此建议通过 ES2015 提供的 class 和 extends 关键字去完成继承，它们内置了上述两个步骤。

11. 什么是Promise？我们用Promise来解决什么问题
Promise 是异步编程的一种解决方案：
从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。

promise是用来解决两个问题的：

回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象
promise可以支持多个并发的请求，获取并发请求中的数据
这个promise可以解决异步的问题，本身不能说promise是异步的




