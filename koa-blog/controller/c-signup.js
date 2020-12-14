const userModul = require('../lib/mysql.js')
const md5 = require('md5')
const fs = require('fs')
exports.postSignup = async ctx => {
    // console.log(ctx.request.body);
    //已经拿到 前端传过来的数据，调用mysql.js 的insertData 去插入数据
    let {name,password,repeatpass,avator} = ctx.request.body;
    let base64Data = avator.replace(/^data:image\/\w+;base64,/, ""),
                    dataBuffer = new Buffer(base64Data, 'base64'),
                    getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now(),
                    upload = await new Promise((reslove, reject) => {
                        fs.writeFile('./public/images/' + getName + '.png', dataBuffer, err => {
                            if (err) {
                                throw err;
                                reject(false)
                            };
                            reslove(true)
                            console.log('头像上传成功')
                        });
                    });
    if(upload){
        await userModul.insertData([name, md5(password), getName + '.png',new Date().getTime()])
            .then((res) => {
                console.log('注册成功',res);
                ctx.body = {
                    code:200,
                    message:'注册成功'
                }
            })
        }else{
            console.log('头像上传失败')
            ctx.body = {
                code:500,
                message:'头像上传失败'
            }
        }

    await userModul
}