//引入express模块
const express = require('express')

//创建web服务器 app对象
const app = express()

//监听用户请求的部分

//启动服务器
app.listen(30, '127.0.0.1', () => {
console.log('server is running at http://127.0.0.1:30')
})