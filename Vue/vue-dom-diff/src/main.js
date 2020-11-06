import {createElement,render,renderDom} from './element';
import diff from './diff';
import patch from'./patch';
let virtualDom1 = createElement('ul',{class:'list'},[
    createElement('li',{class:'item'},['1']),
    createElement('li',{class:'item'},['2']),
    createElement('li',{class:'item'},['3'])
])

let virtualDom2 = createElement('ul',{class:'list-group',id:'group'},[
    createElement('li',{class:'item'},['a'])
])

let el = render(virtualDom1);

renderDom(el,document.getElementById('app'));
let patches = diff(virtualDom1,virtualDom2)//补丁
//
patches(el,patches)
console.log(el)


// virtualDom1 = <ul>
//                  <li>1</li>
//                 <li>2</li>
//               </ul>


//DOM diff  比较两个虚拟DOM的区别，也就是比较两个对象的区别
//根据两个虚拟对象创建出来 补丁，描述改变的内容，将这个补丁用来更新dom