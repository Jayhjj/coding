const express = require('express')
const app = new express()
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.get('/getTest',function(request,response){
    data = {
        'message':'祝我成功'
    }
    response.json(data);
})
app.listen(3000,function(){
    console.log('服务器启动成功')
});