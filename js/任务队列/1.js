// 设计一个简单的任务队列, 要求分别在 1,3,4 秒后打印出 "1", "2", "3"

class Queue{
    constructor(){
        this.task = [];
    }
    task(time,cb){
        this.task.push({
            time,
            cb
        })
        //链式调用
        return this
    }
    start(){
        let t = 0;
        for(let task of this.tasks){
            t += task.time;
            setTimeout(() => {
                task.cb()
            }, t);
        }
    }
}
 new Queue()
  .task(1000, () => {
    console.log(1);
  })
  .task(2000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();

