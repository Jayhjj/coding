// class EventEmitter{
//     constructor(){
//         this.events = this.evens || new Map()
//     }
//     addListener(){ //监听事件，往系统里添加事件
//         if(!this.events.get(type)){
//             this.events.set(type,fn)
//         }
//     }

//     emit(type){  //触发事件，执行系统里的事件
//         let handle = this.events.get(type)
//         handle.apply(this,[...arguments].slice(1))
//     }
// }


class EventEmitter{
    constructor(){
        this.event = event || new Map()
    }
    addListen(){
        if(!this.event.get(type)){
            this.event.set(type)
        }
    }
    emit(){
        let handle = this.event.get(type)
        handle.apply(this,[...arguments].slice(1))
    }
}