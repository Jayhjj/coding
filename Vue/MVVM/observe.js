// obj
// 要定义属性的对象。
// prop
// 要定义或修改的属性的名称或 Symbol 。
// descriptor
// 要定义或修改的属性描述符。
// 创建一个Observe构造函数
// 写数据劫持的主要逻辑
function Observe(data){
     // 所谓数据劫持就是给对象增加get,set
    // 先遍历一遍对象再说
     for(let key in data){  // 把data属性通过defineProperty的方式定义属性
        let val = data[key];
        observe(val); // 递归继续向下找，实现深度的数据劫持
        Object.defineProperty(data,key,{
            configurable:true,
            get(){
                // return val;
                return this._data[key]; 
            },
            set(newVal){
                if(val === newVal){
                    return;
                }
                // val = newVal;
                this._data[key] = newVal;
                observe(newVal);
            }
        });
    }
}
// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data){
     // 如果不是对象的话就直接return掉
    // 防止递归溢出
    if(!data || typeof data !== 'object') return;
    return new Observe(data);
}