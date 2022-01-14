const express = require('express')
const app = express()

//中间件函数必须包含next，同时调用next()
//中间件函数第一种写法
const vm = function(req,res,next){
    req.time = new Date()
    console.log('中间件函数第一种写法')
    next()
}
app.use(vm)

//中间件函数第二种写法
app.use((req,res,next)=>{
    console.log('这是中间件函数第二种写法')
    next()
})

//以上2中属于全局中间件

const router = require('./02.express路由')
app.use(router)

app.listen(80,()=>{
    console.log('服务器启动成功了, http://127.0.0.1')
})
