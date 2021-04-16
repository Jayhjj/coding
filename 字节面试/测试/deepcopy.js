function deepcopy(obj){
    if(typeof obj !== 'object') return
    const newobj = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newobj[key] = typeof obj[key] === 'object' ? deepcopy(obj[key]) : obj[key]
        }
    }
    return newobj
}