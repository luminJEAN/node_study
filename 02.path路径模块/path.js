const path = require('path')
const path1 = path.join(__dirname)
const url = path.join(__dirname,'../')
console.log(path1,url)

const lastname = path.basename(path.join(__dirname,'../','/read.txt'))
const noExt = path.basename(path.join(__dirname,'../','/read.txt'),'.txt')
const ext = path.extname(path.join(__dirname,'../','/read.txt'))
console.log(lastname,noExt,ext)

