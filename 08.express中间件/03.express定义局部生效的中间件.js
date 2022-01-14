const express = require('express')
const app = express()


const router = require('./04.express路由')
app.use(router)

app.listen(80,()=>{
    console.log('服务器启动成功了, http://127.0.0.1')
})
