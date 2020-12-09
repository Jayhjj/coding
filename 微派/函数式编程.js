// 1、请在不影响原调用的情况下简化下列方法
function func1(c) {
 const a = 1
 const b = 2

 const d = a * b * c

 return a + b + c + d
}

function func2(c) {
 const a = 1
 const b = 2

 const d = a + b + c

 return a + b + c + d
}

function func3(c) {
 const a = 1
 const b = 2

 const d = a - b + c

 return a + b + c + d
}

function func4(c) {
 const a = 1
 const b = 2

 const d = a + b - c

 return a + b + c + d
}


//共同的逻辑 提取出来
//不同的地方：调用的时候，传入的参数不同
//面向对象 对数据封装
//函数式编程: 对过程的封装
function fun(makeD){
    const a = 1;
    const b = 2;
    return function(c){
        const d = makeD(a,b,c)
        return a + b + c +d
    }
    
}

const f1 = fun((a,b,c) => a * b * c);

const f2 = fun((a,b,c) => a + b + c);

const f3 = fun((a,b,c) => a - b + c);

const f4 = fun((a,b,c) => a + b - c);