const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    if(req.url === '/'){
        fs.createReadStream('./1.html').pipe(res)
    }else if(req.url === './api/send'){
        let str = '';
        req.on('data',(data) => {
            str+=data;
        })
        req.on('end',() => {
            console.log('接收完毕',str);
        })
    }
})
.listen(8080,() => {
    console.log(8080)
})