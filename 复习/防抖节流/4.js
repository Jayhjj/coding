function debounce(fn,wait){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
                fn.apply(context,args)
        }, wait);
    }
}