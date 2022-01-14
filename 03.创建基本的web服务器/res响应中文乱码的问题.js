const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=> {
    //req,请求响应
    //req.url 请求响应的地址
    //req.method 请求响应的方式
    console.log(req.url,req.method)
    const data = `客户端请求地址是${req.url},请求方式${req.method}`
    // console.log('响应对象',res)
    res.setHeader('Content-Type','application/json;charset:utf-8;')
    res.end(data)
})
server.listen('8080',(err,data)=> {
    console.log('服务运行在http://127.0.0.1:8080')
})

