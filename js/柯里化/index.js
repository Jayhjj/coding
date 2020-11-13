// function sun (a,b,c){
//     console.log(a + b + c)
// }
// let reg = /^1[3-9]\d{9}$/;//验证手机号
// let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\d(a-z)(A-Z)]{6,16}$/;//验证密码
// let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;//验证邮箱



// function currying(fn){
//     var allArgs = [];  

//     return function next(){
//         var args = [].slice.call(arguments);  //args被引用

//         if(args.length > 0){
//             allArgs = allArgs.concat(args);
//             return next;
//         }else{
//             return fn.apply(null, allArgs);
//         }
//     } 
// }
// var add = currying(function(){//指向了next方法
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// });



function curry(fn) {
    let arr = [];
    function t(...args) {
        arr.push(...args);
        if (arr.length < fn.length) {
            arr.push(...args);
            return t
        } else {
            fn.apply(null, arr);
        }
    }
    return t;
}
let sum = (a, b, c) => a + b + c;
let fun = curry(sum)
consloe.log(fn(1)(2)(3))

// 手写一个函数的柯里化，实现下面功能：
// add(2,3,4).sumOf()
// add(2)(3,4).sumOf()
// add(2)(3)(4).sumOf()
// add(2,3)(4).sumOf()

function curry(fn) {
    let arr = [];
    function t(...args) {
        arr.push(...args);
        // this.sumOf = sumOf
        return t
    }
    t.sumOf = sumOf
    function sumOf(){
        return fn.apply(null,arr);
    }
    return t;
}
let sum = (a, b, c) => a + b + c;
let add = curry(sum);
let res = add(2,3,4).sumOf()
console.log(res)
