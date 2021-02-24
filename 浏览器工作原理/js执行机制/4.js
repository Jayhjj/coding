// 作用域链


//词法作用域: 是根据代码位置来决定的


// 要看结果是多少，就要看 作用域是怎么走的，要知道作用域怎么走的，就要看词法作用域是怎么嵌套的


//块级作用域中的变量的查找

function bar(){
    var name = 'jay'
    let test = 100
    if(1){
        let name = 'jun'
        console.log(test)
    }
}

function foo(){
    var name = 'jie'
    let test = 2
    {
        let test = 3
        bar()
    }
}
var name = 'huang'
let age = 10
let test = 1
foo()

//闭包

function foo() {
    var myName = '甘总'
    let test1 = 1
    const test2 = 2
    var innerbar = {
      getName: function() {
        console.log(test1);
        return myName
      },
      setName: function(newName) {
        myName = newName
      }
    }
    return innerbar
  }
  var bar = foo()
  bar.setName('杨宝')
  bar.getName()
  console.log(bar.getName());


//   闭包定义: 在js中，根据词法作用域的规则，内部函数总是可以访问外部函数中声明的变量，
//   当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束，但是内部函数引用
//   外部函数的变量依然保存在内存中，我们将这些变量为闭包的产物，这些变量的集合就称为闭包


// 闭包是怎么回收的

// 1. 如果引用闭包的函数是一个全局变量，那么这个闭包就会一直存在直到页面关闭
// 2. 如果引用闭包的函数时一个局部变量，等函数销毁后，在下一次js引擎执行垃圾回收时，判断闭包不在使用了才被垃圾回收
