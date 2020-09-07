// 如果使用amd时给地址有扩展名.js,就意味着相对AMD.html的相对位置
// 如果使用amd时给的地址没有扩展名，就相对当前js的地址
// amd都是异步的，加载完成才有这个内容
// require 引入
// define(对象)   就是定义个对象导出   无依赖导出
require(["./a"],function(obj){
    console.log(obj)
})


// 同时加载多个模块
// 加载的数组顺序，对应返回的内容将会是后面的函数参数的顺序
require(["./a","./b"],function(obj,{a,b}){
    // 这里显然是异步过程。当全部加载完成后会执行当前这个函数
    // 这个参数就是加载进来文件返回的对象
    console.log(obj,a,b)
})


// 有依赖导出
/* 
    define([加载的文件模块],function(加载的结果对象){
       return  对象    导出的对象   
    })
*/
require(["./c"],function(obj){
    obj.run()
})


// 只有再主文件的js中才会出现require();不导出,仅加载模块执行内容
// require([加载的文件模块1,加载的文件模块2],function(模块1返回的对象,模块2返回的对象){

// })