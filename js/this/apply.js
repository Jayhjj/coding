// // 例子1：浏览器环境 非严格模式下
// var doSth = function(a, b){
//     console.log(this);
//     console.log([a, b]);
// }
// doSth.apply(null, [1, 2]); // this是window  // [1, 2]
// doSth.apply(0, [1, 2]); // this 是 Number(0) // [1, 2]
// doSth.apply(true); // this 是 Boolean(true) // [undefined, undefined]
// doSth.call(undefined, 1, 2); // this 是 window // [1, 2]
// doSth.call('0', 1, {a: 1}); // this 是 String('0') // [1, {a: 1}]


// // 例子2：浏览器环境 严格模式下
// 'use strict';
// var doSth2 = function(a, b){
//     console.log(this);
//     console.log([a, b]);
// }
// doSth2.call(0, 1, 2); // this 是 0 // [1, 2]
// doSth2.apply('1'); // this 是 '1' // [undefined, undefined]
// doSth2.apply(null, [1, 2]); // this 是 null // [1, 2]

function getGlobalObject(){
    return this;
}
Function.prototype.applyFn = function app(thisArg,argsArray){// `apply` 方法的 `length` 属性是 `2`。
        // 1.如果 `IsCallable(func)` 是 `false`, 则抛出一个 `TypeError` 异常。
        if(typeof this !== 'function'){
            throw new TypeError(this + 'is not a function');
        }
         // 2.如果 argArray 是 null 或 undefined, 则
         // 返回提供 thisArg 作为 this 值并以空参数列表调用 func 的 [[Call]] 内部方法的结果。
         if(typeof argsArray === 'undefined' || argsArray === 'null'){
             argsArray = [];
         }
        // 3.如果 Type(argArray) 不是 Object, 则抛出一个 TypeError 异常 .
        if(argsArray !== new Object(argsArray)){
            throw new TypeError('CreateListFromArrayLike called on non-object');
        }
        if(typeof thisArg === 'undefined' || thisArg === null){
            // 在外面传入的 thisArg 值会修改并成为 this 值。
            // ES3: thisArg 是 undefined 或 null 时它会被替换成全局对象 浏览器里是window
            thisArg = getGlobalObject();
        }
           // ES3: 所有其他值会被应用 ToObject 并将结果作为 this 值，这是第三版引入的更改。
        thisArg = new Object(thisArgs);
        var __fn = '__fn';
        thisArg[__fn] = this;
        // 9.提供 thisArg 作为 this 值并以 argList 作为参数列表，调用 func 的 [[Call]] 内部方法，返回结果
        var result = thisArg[__fn](...argsArray);
        delete thisArg[__fn];
        return result;

}

