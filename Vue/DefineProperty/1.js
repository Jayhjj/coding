var data = {
    name:'jay',
    age:18
}
observe(data)
let name = data.name //get value
data.name = 'jay' //set value

function observe(obj){
    Object.keys(obj).forEach(key => {
        definReactive(obj,key,obj[key])

    })
}
function definReactive(obj,key,val){
    if(typeof val === 'object' && val !== null){
        observe(val);
    }
    Object.defineProperty(obj,key,{
        get:function(){
            return val
        },
        set:function(newVal){
            if(newVal === val || (newVal !== newVal && val !== val)){
                return
            }
            val = newVal
        }
    })
}