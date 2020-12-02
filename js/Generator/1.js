//源码实现(简单版本)
function generator(cb){
    return(function (){
        var object = {
            next:0,
            stop:function(){

            }
        }
        return{
            next:function(){
                var ret = cb(object)
                if(ret === undefined) return{value:undefined,done:true}
                return {
                    val:ret,
                    done:false
                }
            }
        }
    })()
}