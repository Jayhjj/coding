//手写一个bind函数
Function.prototype.mybind = function(context){
    //判断调用者是否为函数
    if(typeof this != 'function'){
        throw new TypeError('Error')
    }
    //截取传递的参数
    const args = Array.from(arguments).slice(1)
    //_this指向调用的函数
    const _this = this;
    //返回一个函数
    return function F(){
        //因为返回了一个函数，我们可以new F(),所以需要判断
        //对于new的情况来说，不会被任何方式改变this
        if(this instanceof F){
            return new _this(...args,...arguments)
        }else{
            return _this.apply(context,args.concat(...arguments))
        }
    }

}


// Function.prototype.bind = function (oThis) {
//     var aArgs = Array.prototype.slice.call(arguments, 1);
//     var fToBind = this;
//     var fNOP = function () {};
//     var fBound = function () {
//       fBound.prototype = this instanceof fNOP ? new fNOP() : fBound.prototype;
//       return fToBind.apply(this instanceof fNOP ? this : oThis || this, aArgs )
//     }   
//     if( this.prototype ) {
//       fNOP.prototype = this.prototype;
//     }
//     return fBound;
//   }