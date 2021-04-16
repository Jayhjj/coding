function curry(fn){
    let allArgs = []
    return function next(){
      var args = [].slice.call(arguments)
        if(args.length > 0 ){
            allArgs = allArgs.concat(args)
            return next()
        }else{
           return fn.call(null,allArgs)
        }
    }
}