const fs = require('fs');
// fs.readFile('./resource/为学.md',(err,data1) => {
//     fs.readFile('./resource/插秧诗.md',(err,data2) => {
//         fs.readFile('./resource/观书有感.md',(err,data3) => {
//             let result = data1+ '\r\n' + data2 + '\r\n' + data3;
//             console.log(result);
//         })
//     })
// })

//使用Promise实现
const p = new Promise((reslove,reject) => {
    fs.readFile("./resource/为学.md",(err,data) => {
        reslove(data);
    })
})
p.then(value => {
    return new Promise((reslove,reject) => {
        fs.readFile("./resource/插秧诗.md",(err,data) => {
            reslove([value,data]);
        });
    })
    
}).then(value => {
    return new Promise((reslove,reject) => {
        fs.readFile("./resource/观书有感.md",(err,data) => {
            //压入
            value.push(data);
            reslove(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
})