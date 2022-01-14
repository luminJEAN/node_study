const mysql = require('mysql')

//连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'express_db'
});

// 测试连接查询数据库
db.query('SELECT * from users', (err, data) => {
    if (err) return console.log(err, '连接失败')
    console.log(data, '连接成功')
})

//插入数据,第一种写法
// const data = { name: 'chenchen', password: 'wq123456', date: new Date()}
// const sqlInsert = 'Insert into users (name,password,date) values (?,?,?)'
//
// db.query(sqlInsert,[data.name,data.password,data.date], (err,result) => {
//     if (err) return console.log(err,'新增失败')
//     if (result.affectedRows === 1) {
//         console.log(result, '新增成功')
//     }
// })


//插入数据,第二种写法(简写方式)
// const data = { name: 'gujiaoshou', password: 'gxc123456', date: new Date()}
// const sqlInsert = 'Insert into users SET ?'
//
// db.query(sqlInsert,data,(err,result) => {
//     if (err) return console.log(err,'新增失败')
//     if (result.affectedRows === 1) {
//         console.log(result, '新增成功')
//     }
// })


//更新数据,第一种写法
// const data = {id: 6, name: 'chenxiao', password: 'cx123456',date: new Date()}
// const sqlUpdate = 'Update users SET name = ?, password = ?, date = ? where id = ?'
//
// db.query(sqlUpdate, [data.name, data.password, data.date, data.id],(err,result) => {
//     if (err) return console.log(err,'更新失败')
//     if (result.affectedRows === 1) {
//         console.log(result, '更新成功')
//     }
// })

//更新数据,第二种写法(简写方式)
// const data = {id: 5, name: 'chenchen', password: 'cx123456',date: new Date()}
// const sqlUpdate = 'Update users SET ? where id = ?'
//
//
// db.query(sqlUpdate, [data, data.id],(err,result) => {
//     if (err) return console.log(err,'更新失败')
//     if (result.affectedRows === 1) {
//         console.log(result, '更新成功')
//     }
// })


//删除数据，(物理删除(真正的删除)和逻辑删除(用标示显示是否删除，如0/1，基本上都是逻辑删除))
// const sqlDelete = 'delete from users where id = ?'
// db.query(sqlDelete, 11, (err, result) => {
//     if (err) return console.log(err, '删除失败')
//     if (result.affectedRows === 1) {
//         console.log(result, '删除成功')
//     }
// })


//删除数据 (逻辑删除，可以通过flag字段来标记是否删除，1表示删除)

// const sqlDelete = 'update users set flag = 1 where id = ?'
// db.query(sqlDelete, 11, (err, result) => {
//     if (err) return console.log(err, '删除失败')
//     if (result.affectedRows === 1) {
//         console.log(result, '删除成功')
//     }
// })






