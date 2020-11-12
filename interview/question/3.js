//Object.prototype.toString.call()  
//instanceof
//Array.isArray()

js1//这三个方法之间的区别的优缺点

// 1. instanceof 只能判断对象类型，但是所有的对象类型 instanceof Object都是True
// 2. Object.prototype.toString.call() 能判断所有的原始类型
// 3. Array.isArray()  再检测Array实例时比instanceof更优秀，因为Array.isArray可以检测出iframe



js2//介绍 重绘 和 回流 ，以及如何优化
// 回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，
// 浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。
// 这个过程就是回流（也叫重排）。

// 重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，
// 浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。这个过程叫做重绘。
//不影响页面元素在文档流的位置

// 优化   
// 1. 避免使用 clientWidth... offsetWidth... getBoudingClientRect...
//   因为会强制刷新浏览器的任务队列

// 2. 使用transform 代替 top  使用visibility 代替 display:none  避免使用table布局
//    避免使用多层内连样式

// 3. 避免频繁操作样式 避免频繁操作Dom 对具有复杂动画的元素使用绝对定位


js3//全局作用域中，用const和let 声明的变量在哪里 ？怎么获取
    // var a = 123;
    // function fn(){
    //     console.log(window.a);
    // } 
    // fn();
    
    let b = 456;
    console.log(window.b);//undefine

    // let 和 const 声明的变量并不在全局对象当中，并不会挂载到window上
    // 查找声明变量的阶段会把let声明的变量放到词法环境当中，而var声明的则在作用域当中



