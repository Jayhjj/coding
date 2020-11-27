function greet(person:string):string{
    return 'Hello' + person
}
console.log(greet('Typescript'))



//数字枚举
// enum Direction{
//     EAST,
//     SOUTH,
//     WEST,
//     NORTH
// }
// let dir:Direction = Direction.EAST

//字符串枚举
// enum Direction{
//     EAST = "EAST",
//     SOUTH = "SOUTH",
//     WEST = "WEST",
//     NORTH = "NORTH"
// }
// let dir:Direction = Direction.EAST
// console.log(dir);


//异构枚举

enum Enmu{
    
}


//tuple类型  元组
let tupleType:[string,boolean] 
tupleType = ['123',true]   

let u:undefined = undefined;

let n:number = u
