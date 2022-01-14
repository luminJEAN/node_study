const package_tools = require('../package_tools')

//package_tools是时间格式化的包，未上传到npm 网站上时的引入方式，若上传到网上，需要先npm install package_tools,之后在node_modules里面
//可以看到这个包，然后在页面引入require('package_tools')
console.log(package_tools)
console.log(package_tools.DateFormate(new Date()))
