var obj ={
    a:100,
    b:function(){
        console.log("amd模块化开发")
    }
}

// define 导出模块
// AMD 不支持定义函数导出，导出的一定得时对象
define(obj)