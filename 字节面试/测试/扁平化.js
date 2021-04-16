const res = []
function flate(arr){
    for(let i = 0 ; i < arr.length;i++){
        let item = arr[i]
        if(Array.isArray(arr[i])){
            flate(item)
        }else{
            res.push(item)
        }
    }
    return res
}


function flatten(arr){
    return arr.reduce((pre,cru) => {
        return pre.concat(Array.isArray(cru) ? flatten(cru) : cru)
    },[])
  }
  
















