// Koa  类的提供   iphone  简约之美
let http = require('http');
let EventEmitter = require('events');
let context = require('./context');
let request = require('./request');
let response = require('./response');
let Stream = require('stream');
class Koa extends EventEmitter {
  constructor() {
    super()
    // 未来中间件 
    // this.fn = undefined; // 数组   callback 
    this.middlewares = [];
    this.context = context;
    this.request = request;
    this.response = response;
  }
  use(fn) { // 先支持一个函数的callback 
    // 异步
    // this.fn = fn;  // function callback   middlewares 
    this.middlewares.push(fn)
  }
  compose(middlewares,ctx){
    function dispath(index){
      if(index === middlewares.length) return
      let middlewares = middlewares[index]
      middlewares(ctx,() => dispath(index+1))
    }
    dispath(0)
  }
  createContext (req, res) { // 创建ctx  
    // es6  context  ctx   context.js 模块   fn ctx.body 
    const ctx = Object.create(this.context); // 继承原对象 ctx 在增加属性时不影响原对象
    // ctx.body = 'dfdfdf';
    const request = ctx.request = Object.create(this.request);
    const response = ctx.response = Object.create(this.response);
    ctx.req = request.req = response.req = req; //  引用式赋值 
    ctx.res = request.res = response.res = res;
    request.ctx = response.ctx = ctx;
    request.response = response;
    response.request = request;
    return ctx;
  }
  hhandleRequest(req, res) {
    res.statusCode = 404
    let ctx = this.createContext(req, res)
    // this.fn(ctx)
    this.compose(this.middlewares,ctx)
    if (typeof ctx.body == 'object') {
      res.setHeader('Content-Type', 'application/json;charset=utf8')
      res.end(JSON.stringify(ctx.body))
    } else if (ctx.body instanceof Stream) {
      ctx.body.pipe(res)
    } else if (typeof ctx.body == 'string' || Buffer.isBuffer(ctx.body)) {
      res.setHeader('Content-Type', 'text/html;charset=utf8')
      res.end(ctx.body)
    } else {
      res.end('Not found')
    }
  }
  listen(...args) { // args  port   callback 
    // this.fn 接受的是  (req, res) => { } 怎么实现
    // 交给中间处理函数， req, res 加工成   ctx 他的内部调用  this.fn 
    let server = http.createServer(this.handleRequest.bind(this)); // callback 
    server.listen(...args) // 
  }
}

module.exports = Koa