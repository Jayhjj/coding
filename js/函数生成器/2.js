// const assert = require('assert');

// /**
//  * --- 问题描述 ---
//  *
//  * 实现一个函数生成器，接收一个原函数和一组 index，生成一个新函数
//  * 调用新函数时，按照 index 数组中定义的顺序将参数传入原函数中
//  *
//  */
// // [2, 0, 1]
// // ('foo', 'bar', 'fiz')

// // ['bar', 'fiz', 'foo']
// function createRearFunc(func, indexes) {
//   return function(...args) {
//     let arr = [];
//     for (let i = 0; i < indexes.length; i ++) {
//       arr[indexes[i]] = args[i];
//     }
//     return func(...arr);
//   }
// }

// const originalFunc = function (a, b, c) {
//   return [a, b, c];
// };
// const f = createRearFunc(originalFunc, [2, 0, 1]);
// // 按照 [2, 0, 1] 定义的顺序
// //  2       0      1
// // ['foo', 'bar', 'fiz'] 分别应该作为原函数的第 2/0/1 个参数传入
// let t = f('foo', 'bar', 'fiz')
// console.log(t);


console.log(1);

setImmediate(() => {
  console.log(4);
});

setTimeout(() => {
  console.log(2);
});

process.nextTick(() => {
  console.log(3);
});

new Promise((resolve) => {
  console.log(5);
  resolve();
  console.log(6);
}).then(() => {
  console.log(7);
});

Promise.resolve().then(() => {
  console.log(8);
  process.nextTick(() => {
    console.log(9);
  });
});
