function thorttle(fn,wait){
    var pretime = 0;
    return function(){
        var nowtime = new Date;
        var o = this;
        var arg = arguments
        if(nowtime - pretime > wait){
            fn.call(o,arg)
            pretime = nowtime
        }
    }
}