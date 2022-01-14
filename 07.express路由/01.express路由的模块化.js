const express = require('express')
const app = express()
//引入路由模块
const router = require('./02.express路由')

// app.use(router)
//可以给路由模块添加前缀，和静态资源服务一样
app.use('/api',router)

app.listen(80,()=>{
    console.log('服务器启动成功了, http://127.0.0.1')
})
