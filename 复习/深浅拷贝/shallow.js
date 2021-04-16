function shallow(obj){
    if(typeof obj !== 'object') return
    let newObj = obj instanceof Array ? [] : {}
    for(let k in obj){
        if(obj.hasOwnproperty(k)){
            newObj[k] = obj[k]
        }
    }
    return newObj
}