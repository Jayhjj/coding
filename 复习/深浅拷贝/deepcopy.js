function deepCopy(obj){
    if(typeof obj !== 'object') return
    let newObj = obj instanceof Array ? [] : {}
    for(let k in obj){
        if(obj.hasOwnProperty(k))
        newObj[k] = typeof obj[k] === 'object' ? deepCopy(obj[k]) : obj[k]
    }
   return newObj
}