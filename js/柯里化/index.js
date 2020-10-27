function sun (a,b,c){
    console.log(a + b + c)
}
let reg = /^1[3-9]\d{9}$/;//验证手机号
let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\d(a-z)(A-Z)]{6,16}$/;//验证密码
let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;//验证邮箱



function currying(fn){
    var allArgs = [];  

    return function next(){
        var args = [].slice.call(arguments);  //args被引用

        if(args.length > 0){
            allArgs = allArgs.concat(args);
            return next;
        }else{
            return fn.apply(null, allArgs);
        }
    } 
}
var add = currying(function(){//指向了next方法
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
});

