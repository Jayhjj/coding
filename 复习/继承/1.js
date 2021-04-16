//第一种，借助call
// function parent1(){
//     this.name = 'jay'
// }
// function ch(){
//     parent1.call(this)
//     this.type = 'nihao'
// }
// console.log(new ch())

//第二种，借助原型链

function parent2(){
    this.name = 'jay'
    this.play = [1,2,3,4]
}
function ch1(){
    this.type = 'nihao'
}
ch1.prototype = new parent2()  
//ch1.prototype._proto_ = parent2.prototype
console.log(new ch1());
//0._proto_ = ch1.prototype

var s1 = new ch1()
var s2 = new ch1()
s1.play.push(4)
console.log(s1.play,s2.play)