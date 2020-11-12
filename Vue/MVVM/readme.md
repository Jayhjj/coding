为什么要做数据劫持？

观察对象，给对象增加Object.defineProperty
vue特点是不能新增不存在的属性 不存在的属性没有get和set
深度响应 因为每次赋予一个新对象时会给这个新对象增加defineProperty(数据劫持)