let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')
class Koa {
    constructor(){
        this.callbackFn;
        this.context = context;
        this.request = request;
        this.response = response
    }
    use(cb){
    this.callbackFn = cb
    }
    createContext(req,res){
        let ctx = context
        
    }
    handleRequest(req,res){
        this.callbackFn(req,res)
    }
    listen(){
       let server = http.createServer(this.handleRequest.bind(this))
       server.listen(...arguments)
    }
}
module.exports = Koa
