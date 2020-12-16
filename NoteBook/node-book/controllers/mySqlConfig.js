const mysql = require('mysql')
const config = require('./defaultConfig')
//连接线程池
let pool = mysql.createPool({
    host:config.dataBase.Host,
    user:config.dataBase.USERNAME,
    password:config.dataBase.PASSWORD,
    port:config.dataBase.PORT,
    database:config.dataBase.DATABASE
})

let allServices = {
    query:function(sql,values){
        return new Promise((resolve,reject) => {
            pool.getConnection(function(err,connection){
                if(err){
                    reject(err)
                }else{
                    connection.query(sql,values,(err,rows) => {
                        if(err){
                            reject(err)
                        }else{
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })
    }
}
//用户登录
let userLogin = function(username,userpwd){
    let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
    return allServices.query(_sql)
}
let userRegist = function(){
    
}
module.exports = {
    userLogin,
    userRegist
}