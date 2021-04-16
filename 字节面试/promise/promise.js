//定义 三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECT = 'reject';

function myPromise(executor){
    let self= this ; //缓存当前promise实例
    self.value = null;
    self.error = null;
    self.status = PENDING;
    self.onFulfilledCallback = [];//成功的回调函数
    self.onRejectedCallback = [];//失败的回调函数

    //成功状态
    const resolve = (value) => {
        if(self.status !== PENDING) return
        setTimeout(() => {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilledCallback.forEach((callback) => {
                callback(self.value)
            })
        });
    }

    const reject = (error) => {
        if(self.status !== PENDING) return
        setTimeout(() => {
            self.status = REJECT;
            self.error = error;
            self.onRejectedCallback.forEach((callback) => {
                callback(self.error)
            })
        });
    }
    executor(resolve,reject)
}

myPromise.prototype.then = function(onFulfilled,onRejected){
    if(this.status === PENDING){
        this.onFulfilledCallback.push(onFulfilled);
        this.onRejectedCallback.push(onRejected) ;
    }else if(this.status === FULFILLED){
        onFulfilled(this.value)
    }else{
        onRejected(this.error)
    }
    return this
}

Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  }