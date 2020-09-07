// require  接口
// 引入 js 文件
var Exp = require("./a")
// 执行js文件下的方法
// Exp.c()
Exp.fn()

// 导入 b.js 方法
var obj = require("./b")
obj.play()

// 引入 c.js 
var mode = require("./c")
mode.ao()
mode.gan()