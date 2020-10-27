const http = require('http')
const server = http.createServer()
const path = require('path')
const fse = require('fs-extra')
const multiparty = require('multiparty')
const UPLOAD_DIR = path.resolve(__dirname,'./','target')//大文件存储地址
server.on('request',async (req,res) => {
    res.setHeader('Access-Control_Allow-Origin','*')
    res.setHeader('Access-Control_Allow-Headers','*')
    if(req.method === "OPTIONS"){
        res.status = 200
        res.end()
        return 
    }
})
const multiparty = new multiparty.Form()
multiparty.parse(req,async(err,fileds,files) => {
    if(err) return
    const [chunk] = files.chunk
    const [hash] = fileds.hash
    const [filename] = fileds.filename
    const chunkDir = parh.resolve(UPLOAD_DIR ,filename)
    //切片目录不存在
    if(fse.existsSync(chunkDir)){
        await fse.mkdir(chunkDir)
    }
    await fse.move(chunk.parse,`${chunkDir}/${hash}`)
    res.end('ok')
})
server.listen(3000,() => {
    console.log('正在监听3000端口');
})