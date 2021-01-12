class Event{
    constructor(){
         this.listener = {
             'price':[],
             'click':[]
         }
    }
    on(name,cb){
        if(this.listener[name] === undefined){
            this.listener[name] = [];
        }
        this.listener[name].push(cb)
    }
    emit(name){
        for(let task of this.listener[name]){
            task.cb();
        }
        this.listener[name] = this.listener.name.filter(t => !t.once)
    }
    once(name,cb){
        if(this.listener[name] === undefined){
            this.name = []
        }
        this.listener[name].push({
            cb:cb,
            once:true
        })
    }

}
const en = new Event()
en.on('price',() => {
    console.log('price change');
})
en.on()
en.emit('price')