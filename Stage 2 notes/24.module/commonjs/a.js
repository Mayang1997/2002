/* var Exp = (function(){
    var a = 1;
    return {
        c:function(){
            a++
            console.log(a)
        },
        d:function(){
            console.log("commonjs的模块化开发")
        }
    }
})();
// 模块化开发 
// 默认导出 Exp 对象
module.exports = Exp; */

// commonjs模块化开发不仅可以导出对象，还可以导出函数
module.exports = (function(){
    var num = 100;
    return {
        fn:function(){
            num++
            console.log(num)
        },
        fun:function(){
            console.log("导出函数")
        }
    }
})();
