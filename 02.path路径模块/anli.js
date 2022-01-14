const fs = require('fs')

console.log(__dirname);

fs.readFile('../read.txt',(err,data)=> {
    // console.log(data.toString().split(' ').join('\n'))
    const data1 =data.toString().split(' ').map(i=> {
       return  i.replace('=',',')
    })
    const newData = data1.join('\n')
    console.log(data1,newData)
    fs.writeFile('../write.txt',newData,err=>{
        console.log(err)
    })

})

