const express = require('express')
const app = express()



//想要访问project 项目下的文件，使用express.static创建静态资源服务器
app.use(express.static('../project'))
//若有多个express.static，以第一个为准
// app.use(express.static('../project1'))
//还可以添加路径的前缀
// app.use('/project', express.static('../project'))

app.listen(80,()=> {
    console.log('服务器启动成功了, http://127.0.0.1:80')
})




