const fs = require('fs')

fs.writeFile('../read1.txt','data',(err)=> {
    console.log(err)
})


fs.writeFile('../read2.txt','data1',(err)=> {
    console.log(err)
})

