function repeat (func, times, wait) {
    for(let i = 0 ; i < times ; i++){
        let context = this
        return function(str){
            setTimeout(() => {
                func.call(context,str)
            }, wait);
        }
    }
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hellworld");
