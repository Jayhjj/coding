// class Animal { 
//     sayName = () => { throw new Error('你应该自己实现这个方法'); 
// } }
// class Monkey extends Animal { 
//     sayName() { console.log('I love coding'); 
// } }
// const monkey = new Monkey(); 
// console.log(monkey)
// monkey.sayName();



// var length = 10;
// function fn() {
// console.log(this);
// return this.length+1;
// }
// var obj = {
// length: 5,
// test1: function() {
// return fn();
// }
// };
// obj.test2=fn;
// //下面代码输出是什么
// console.log(obj.test1())
// console.log(fn()===obj.test2())
// console.log(fn())
// console.log(obj.test2())

// function Foo() {
//     getName = function() {
//         console.log(1);
//     };
//     return this
// }

// function getName() {
//     console.log(5);
// }
// console.log(this)
// Foo()
// // Foo().getName(); // 输出是？
// console.log(Foo().getName())

// Function.prototype.a = 'Function';
// Object.prototype.a = 'Object';

// function Person() {};
// var child = new Person();
// console.log(Person.a);
// console.log(child.a);
// console.log(child.__proto__.__proto__.constructor.constructor.constructor);



//  if ([] == false) {console.log(1);};
//  if ({} == false ) {console.log(2);};
//  if ([]) {console.log(3);};
//  if ([1] == [1]) {console.log(4);};


// var a = {
//     b:'b',
//     c:function(){
//         console.log(this.b)
//     }
// }
// a.c()
// var a = {
//     b:'b',
//     c:()=>{
//         console.log(this.b)
//     }
// }
// a.c()
// var a = {
//     b:'b',
//     c:function(){
//         console.log(this.b)
//     }
// }
// let d = a.c
// d()

// console.log(1);
// setTimeout(() => {
//  console.log(2);
//  Promise.resolve().then(() => {
//   console.log(3)
//  });
// });
// new Promise((resolve, reject) => {
//  console.log(4)
//  resolve()
// }).then(() => {
//  console.log(5);
// })
// setTimeout(() => {
//  console.log(6);
// })
// console.log(7);

// var a= function () { this.b =3; }
// var c = new a();
// // a.protorype.b = 9;
// var b = 7;
// a();
// console.log(b);
// console.log(c.b);
(function(){
    var a = b = 3;
  })();
  
  console.log(typeof a);
  console.log(b);
  console.log(a);