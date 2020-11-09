// 例子1：浏览器环境 非严格模式下
var doSth = function(a, b){
    console.log(this);
    console.log([a, b]);
}
doSth.apply(null, [1, 2]); // this是window  // [1, 2]
doSth.apply(0, [1, 2]); // this 是 Number(0) // [1, 2]
doSth.apply(true); // this 是 Boolean(true) // [undefined, undefined]
doSth.call(undefined, 1, 2); // this 是 window // [1, 2]
doSth.call('0', 1, {a: 1}); // this 是 String('0') // [1, {a: 1}]


// 例子2：浏览器环境 严格模式下
'use strict';
var doSth2 = function(a, b){
    console.log(this);
    console.log([a, b]);
}
doSth2.call(0, 1, 2); // this 是 0 // [1, 2]
doSth2.apply('1'); // this 是 '1' // [undefined, undefined]
doSth2.apply(null, [1, 2]); // this 是 null // [1, 2]

