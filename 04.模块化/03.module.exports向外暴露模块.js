//第一种
// module.exports.nickName = 'kaka'
// module.exports.add = function (num1, num2) {
//     return num1 + num2
// }
// //第二种
// module.exports = {
//     add: function (num1,num2) {
//         return num1 + num2
//     },
//     nickName: 'kaka1'
// }

//第3种 exports 和module.exports指向的是同一个对象，对外暴露的永远是module.exports对象
console.log(exports === module.exports) //true

exports.nickName = 'kaka2'
exports.add = function (num1, num2) {
    return num1 + num2
}

console.log(module.exports)

