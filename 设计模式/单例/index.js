//保证一个类只有一个实例，并提供一个访问他的全局访问点
class SingleDog{
    show(){
        console.log('我是一个单例对象');
    }
    static getInstance(){
        //判断是否被new过
        if(!SingleDog.Instance){
            SingleDog.Instance = new SingleDog()
        }
        return SingleDog.Instance
    }
}
const s1 =  SingleDog.getInstance()
const s2 =  SingleDog.getInstance()
// s1 === s2 //true