var CustomStack = function (maxSize) {
    this.list = [];
    this.maxSize = maxSize
}

CustomStack.prototype.push = function (x) {
    if(this.list.length < this.maxSize){
        this.list.push(x)
    }
}

CustomStack.prototype.pop = function() {
    if(this.list.length){
        return this.list.pop()
    }else{
        return -1
    }
}

CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k && i < this.list.length; i++) {
    this.list[i] += val
  }
};
