Array.prototype.Mymap = function(fn,thisArg){
    const result = [];
    this.reduce((preSum,curr,index,arr) => {
        result.push(fn.call(thisArg,arr[index],index,arr)) 
    },0)
    return result
}