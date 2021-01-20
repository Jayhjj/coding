const http = require('http')
const fs = require('fs')
const url = require('url')
const game = require()
const queryString = require('querystring')
http.createServer(function(req,res){
    const parsedUrl  = url.parse(req.url)
    if(parsedUrl.pathname  === '/favicon.ico'){
        res.writeHead(200)
        res.end()
        return
    }
    if(parsedUrl.pathname === '/game'){
        const query = queryString.parse(parsedUrl.query)
        const playerAction = query.actionc
    }
    if(parsedUrl.pathname === '/'){
        fs.createReadStream(__dirname,'/game.html').pipe(res)
    }
}).listen(3000)