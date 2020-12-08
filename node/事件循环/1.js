const fs  = require('fs');
fs.readFile('./get.html','utf8',() => {
    Promise.resolve().then(() => {
        setTimeout(() => {
            
        }, 0);
    
    })
    Promise.resolve().then(() => {
        console.log(2)    
    })
    process.nextTick(() => {
        console.log(1)
    })
})