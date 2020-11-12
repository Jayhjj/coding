import add from './add.js';
import min from './min.js';
// import {debounce} from 'loadsh';//这样引入不可以tree-shaking
import debounce from 'lodash/debounce';
//1. es-module 在代码静态分析的时候就可以知道你引入了那些模块
//2. webpack production 会开启tree-shaking
//每个模块假如存在(副作用)，想要干掉它就加入 sideEffects:flase,基本上只要不是pollyFill(垫片)形式的副作用就都可以加上sideEffects:flase
//第三方模块(lodash/element-ui),小心 他们不是es-module
//babel-plugin-import 
//import {Button} from 'element-ui'
//转成import Button from 'element-ui//lib/Button'
function f(){}
console.log(debounce(f))

console.log(add(4,5));