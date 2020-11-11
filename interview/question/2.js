//setTimeout Promise Async/await 的区别
//1. setTimeout 隶属于宏任务队列，会等到执行栈清空后才执行
//2. Promise会让回调函数去到微任务队列，等到宏任务里面的同步代码执行完再执行
//3.Async表示函数可能有异步方法，await后面跟表达式，async执行函数碰到await就先不执行，先立即执行await后面的表达式
//await后面的代码会去到微任务队列

// async function test(){
//     console.log(123);
//     await test1();
//     console.log(234);
// }
// function test1(){
//     console.log(666);

// }

// test();

function flat() {
    let stack = [...a], res = []    
    while (stack.length) {
        let item = stack.pop()
        if(Array.isArray(item)) {
            stack.push(...item)
        } else {
            res.unshift(item)
        }
    }
    return res
}


 