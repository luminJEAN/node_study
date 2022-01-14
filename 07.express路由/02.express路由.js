const express = require('express')

const router = express.Router()

router.get('/user', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

router.post('/user/:name/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

console.log(222,router)

module.exports = router
