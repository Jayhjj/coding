/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.list = [];
    this.minList = [Infinity];
    

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.list.push(x);
    this.minList.push(Math.min(this.minList[this.minList.length - 1], x));
   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
        this.list.pop();
         this.minList.pop();
       
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.list[this.list.length -1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
 return this.minList[this.minList.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */




