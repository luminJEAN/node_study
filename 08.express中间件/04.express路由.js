const express = require('express')

//局部生效的中间件函数
const vm = function(req,res,next){
    req.time = new Date()
    console.log('中间件函数')
    next()
}

const router = express.Router()

router.get('/user',vm, (req, res) => {
    console.log( req.time)
    res.send(req.query + req.time)
})

router.get('/user/info', (req, res) => {
    console.log( req.time)
    res.send(req.query + req.time)
})

router.post('/user/:name/:id', (req, res) => {
    console.log( req.time)
    res.send(req.params + req.time)
})


module.exports = router
