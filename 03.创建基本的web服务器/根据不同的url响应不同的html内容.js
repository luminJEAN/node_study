const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=> {
    let url = req.url
    let content = '<h1>404 找不到</h1>'
    let indexReg = ['/','/index','/index.html']
    if(indexReg.includes(url)) {
        content = '<h1>首页</h1>'
    } else if(url === '/about.html') {
        content = '<h1>about 页面</h1>'
    }

    res.setHeader('Content-Type','application/json;charset:utf-8;')
    res.end(content)

})
server.listen('8080',(err,data)=> {
    console.log('服务器运行了，在http://127.0.0.1:8080')
})
