const bodyParser = require('body-parser')
const express = require('express')

const app = express()
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.post('/user/add',(req,res)=>{
    //想要解析req.body，需要配置body-parser
    console.log(req.body)
})

app.listen(80,()=> {
    console.log('服务器启动成功了, http://127.0.0.1')
})


