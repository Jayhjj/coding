// function add (x:number,y:number,z ?:number):number{
//     if(typeof z === 'number'){
//         return x + y + z
//     }else{
//         return x + y
//     }
    
// }
// let result = add(1,3)


//as 类型断言
let str = 'str'
let numberOrString : number | string

function getLength(input : string | number):number {
    const str = input as string
    if(str.length){
        return str.length
    }else{
        const number = input as number
        return number.toString().length
    }
}


//type guard
function getLength2(input : string | number):number {
   if(typeof input === 'string'){
       return input.length
   }else{
       return input.toString().length
   }
}
