function myinstanceof(left,right){
    let prototype = right.prototype
    let left = left.__proto__
    while(true){
        if(left === prototype){
            return true;
        }
        left = left.__proto__
        if(left === null){
            return false
        }
    }
}