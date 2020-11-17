'use strict';


const Controller = require('egg').Controller

class UserController extends Controller{
    async index(){
       this.ctx.body = [
           {name:'jay'},
            {name:'pipi'}
       ]
    }
}
module.exports = UserController