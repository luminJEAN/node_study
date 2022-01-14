const express = require('express')
const router = express.Router()

router.post('/login',(req,res) =>{
    console.log(1234,req.body)
    console.log(234,req.body.username,req.body.password)
    if (req.body.username === 'admin' && req.body.password === '123456') {
        console.log(req.session)
        req.session.userInfo = req.body
        req.session.isLogin = true
        console.log(req.session)
        res.send({
            status: 0,
            mes: '登录成功',
            data: req.session
        })

    } else {
        return res.send({
            status: 1,
            mes: '用户名密码错误'
        })
    }
})


router.get('/index',(req,res) =>{
    console.log(req.session)
    if (!req.session.isLogin) {
        res.send('用户未登录')
    }
    res.send('用户登录名为:', res.session)

})


router.post('/login/out',(req,res) =>{
    req.session.destory();

    res.send({
        status: 0,
        mes: '退出成功'
    })
})




module.exports = router
