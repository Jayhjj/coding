const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function myPromise(fn){
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve(){
       if(that.state === PENDING){
           that.state = FULFILLED;
           that.value = value;
           that.resolvedCallbacks.map(cb => {   //cb数组里面的每一项
                return cb(that.value)
           })
       }
    }

    function reject(){
        if(that.state === PENDING){
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(cb => {   //cb数组里面的每一项
                 return cb(that.value)
            })
        }
    }

    try{
        fn(resolve,reject)
    }catch(error){
        reject(error);
    }

    myPromise.prototype.then = function(onFulfilled,onRejected){
        const that = this;
        // if(onFulfilled !== 'function'){
        //     return 
        // }
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
        onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}
        if(that.state === PENDING){
            that.resolvedCallbacks.push(onFulfilled);
            that.rejectedCallbacks.push(onRejected);
        }
        if(that.state === FULFILLED){
            onFulfilled(that.value)
        }   
        if(that,status === REJECTED){
            onRejected(that.value)
        }

    }

}