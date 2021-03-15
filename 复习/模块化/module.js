//Es6
export function a(){}

export default function(){}

import {a} from './a.js'


//Common.js 是node独有的规范,浏览器中使用就需要用到 Browserify 解析

module.exports = {
    a:1
}
exports.a = 1

var module = require('./a.js')
module.a



var module = {
    exports:{}
}

var exports = module.exports

//AMD的模块化