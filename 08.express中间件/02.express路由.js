const express = require('express')

const router = express.Router()

router.get('/user', (req, res) => {
    console.log( req.time)
    res.send(req.query + req.time)
})

router.post('/user/:name/:id', (req, res) => {
    console.log( req.time)
    res.send(req.params + req.time)
})

console.log(222,router)

module.exports = router
