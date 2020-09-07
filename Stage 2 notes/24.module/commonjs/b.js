// 利用赋值结构的方法 加载 a.js 文件下的方法
var {fn,fun} = require("./a")
// 创建 一个 对象，当执行这个对象的 play方法时，执行a.js文件下的 c和d方法
var obj = (function(){
    return {
        play:function(){
            fn()
            fun()
        }
    }
})();

// 导出 obj 模块
module.exports = obj