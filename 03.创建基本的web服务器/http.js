const http = require('http')
const server = http.createServer()
server.on('request',(err,data) => {
    console.log(11,'客户端访问服务器触发这个回掉函数')
})
server.listen('8080',(err,data)=>{
    console.log(22,data)
})

