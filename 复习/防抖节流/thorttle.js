function thorttle(func,wait){
    let pre = 0;
    return function(){
        let now =  Date.now
        let context = this
        let arg = arguments;
        if(now - pre >= wait){
            func.apply(context,arg)
            pre = now
        }
    }
}