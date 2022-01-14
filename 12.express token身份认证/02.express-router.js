const express = require('express')
const app = express()
const router = express.Router()
//用于生成token的包
const Jwt = require('jsonwebtoken')
//用于解析token的包
const expressJwt = require('express-jwt')

//
const serectKey = 'jeanKakaBrand**'


//还原token,配置expressJwt成功之后，可以把用户信息挂载到req.user上面
app.use(expressJwt({
    secret: serectKey,  // 签名的密钥 或 PublicKey
    algorithms: ['HS256'],
}).unless({
    path: ['/api/register','/api/login']  //白名单,除了这里写的地址，其他的URL都需要验证
}))


router.post('/login',(req,res) =>{
    console.log(1234,req.body)
    if (req.body.username === 'admin' && req.body.password === '123456') {
        // JWT标准的Tokens由三部分组成
        const token = Jwt.sign({username:req.body.username }, serectKey,{ expiresIn: '300000s' })
        console.log(11,token)
        res.send({
            status: 0,
            mes: '登录成功',
            data: token
        })

    } else {
        return res.send({
            status: 1,
            mes: '用户名密码错误'
        })
    }
})


router.get('/index', expressJwt({
    secret: serectKey,  // 签名的密钥 或 PublicKey
    algorithms: ['HS256'],
}),(req,res) =>{
    console.log('token中解析出来的用户信息', req.headers.authorization,req.user)
    res.send({
        status: 0,
        mes: '查询成功',
        data: req.user
    })

})


// error handler
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        // 这个需要根据⾃自⼰己的业务逻辑来处理理
        res.status(401).send({code:-1,msg:'token验证失败'});
    }else {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }
});



module.exports = router
