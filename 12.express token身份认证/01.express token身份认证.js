const express = require('express')
const session =  require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

//解决跨域
app.use(cors())


app.use(session({
    secret: 'login Info',
    resave: false,
    saveUninitialized: true
}))
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
const router =  require('./02.express-router')


//为接口地址添加前缀
app.use('/api',router)

app.listen(80,()=> {
    console.log('服务器启动成功了, http://127.0.0.1')
})
