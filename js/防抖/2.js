function debounce(fnc,wait){
    let timeout;
    return function(){
        let content = this;
        const args = [...arguments]
        if(timeout) clearTimeout(timeout)
        const callNow = !timeout;
        timeout = setTimeout(() => {
            timeout = null
        },wait)
        if(callNow) fnc(content,args)
    } 
}