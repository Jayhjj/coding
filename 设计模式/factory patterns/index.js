// const yihan = {
//     name:'意涵',
//     age:18,
//     career:'coder'
// }
// const hufei = {
//     name:'胡飞',
//     age:19,
//     career:'manger'
// }
function Person(name,age,career){
    this.name = name
    this.age = age
    this.career = career
}
const person = new Person(name,age,career,work)
function Coder(name,age){
    this.name = name
    this.age = age
    this.career = 'coder'
    this.work = ['写代码','写系统','改bug']
}
function ProductManger(name,age){
    this.name = name
    this.age = age
    this.career = 'productmanger'
    this.work = ['订会议室','写ppt','崔更']
}
function Factory(name,age,career){
    let work
    switch(career){
        case 'coder':
            work = ['写代码','写系统','改bug']
            break
        case 'productmanger':
            work = ['订会议室','写ppt','崔更']
            break
        case 'boss':
            work = ['喝茶','看报','见客户']
            break
    }
    return new Person(name,age,career,work)
}
