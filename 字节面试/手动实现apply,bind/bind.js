// Function.prototype.bind = function(context,...args){
//     if(typeof this !== 'function'){
//         throw new Error('错误')
//     }
//     var self = this;
//     var fbound = function(){
//         self.apply(this instanceof self ? this : context,args.concat(Array.prototype.slice.call(arguments)))
//     }
//     fbound.prototype = Object.create(self.prototype)
//     return fbound
// }

Function.prototype.bind = function(context,...args){
    if(this !== 'function'){
        throw new Error('')
    }
    var self = this;
    function fbound(){
        self.apply(this instanceof self ? this : context,args.concat(Array.prototype.slice.call(arguments)))

    }
    fbound.prototype = Object.create(self.prototype)
    return fbound
}