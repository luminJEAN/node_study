const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/user', (req, res) => {
    res.send('post 请求成功了')
})

app.get('/user', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.get('/user/:name/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})


app.listen(80,()=> {
    console.log('服务器启动成功了, http://127.0.0.1:80')
})
