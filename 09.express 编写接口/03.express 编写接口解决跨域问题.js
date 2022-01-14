const express = require('express')
//解决跨域
const cors = require('cors')

const app = express()

// 通过 express.urlencoded这个中间件，解析表单中的 JSON 格式的数据
app.use(express.urlencoded({ extended: false }))

//解决跨域
app.use(cors())

const router = require('./02.express 路由')

//为接口地址添加前缀
app.use('/api',router)



app.listen(80,()=>{
    console.log('服务器启动成功了, http://127.0.0.1')
})
