const fs = require('fs')

fs.readFile('../read1.txt','utf-8',(err,data)=> {
    console.log(err)
    console.log(data)
})
