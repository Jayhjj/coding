var a = [1,2,3]
var b = [1,2,3]
var c = [1,2,4]

a == b  //false

a > c //false

a < c //true


var  d = {}
var e = Object.prototype;
[d.prototype === e,Object.getPrototypeOf(d) == e]

//对象是没有prototype属性的
//[false,true]