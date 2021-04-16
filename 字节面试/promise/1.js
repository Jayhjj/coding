const PENGING = 'pending';
const FULFILLED = 'fulfilled';
const REJECT = 'reject';

function Mypromise(excutor){
    this.self = this
    self.value = null;
    self.error = null;
    self.status = PENDING;
    self.onFulfilledCallback = [];
    self.onRejectedCallback = [];

    function resolve(value){
        if(self.status = PENDING){
           
            setTimeout(() => { 
                self.status = FULFILLED;
                self.value = value;
                self.onFulfilledCallback.forEach(item => {
                    item(self.value)
                })
            });
        }
    }
    function reject(error){
        if(self.status = PENDING){
           
            setTimeout(() => { 
                self.status = REJECT;
                self.error = error;
                self.onRejectedCallback.forEach(item => {
                    item(self.error)
                })
            });
        }
    }
    excutor(resolve,reject)
}

Mypromise.prototype.then = function (onFulfilled,onRejected){
    if(this.status = PENDING){
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
    }else if(this.status = FULFILLED){
        onFulfilled(this.value)
    }else{
        onRejected(this.error)
    }
    return this

}