// node.js方法：主要是用来 http 通信 - 开启node 服务
// 一：全局方法require()是用来导入模块的，一般直接把 require() 方法的返回值赋值给一个变量，在 JavaScript 代码中直接使用此变量即可 。
// require("http") 就是加载系统预置的 http 模块

var http = require("http");
var query = require("querystring");

// 事件侦听 侦听 http - 客户端
// 事件：侦听事件 http.createServer 
// http.createServer： 是模块的方法，目的就是创建并返回一个新的web server对象，并且给服务绑定一个回调，用以处理请求。
// createServer事件回调函数的两个参数：req/res  - 两个对象
// 对象req ：请求消息对象 客户端发给这个 node服务的信息
// 对象res : 响应消息对象 这个node服务 要发给客户端的消息
var server = http.createServer(function(req,res){
    // req 请求消息对象侦听事件：data事件 - 当客户端发送的数据传送到node服务获得数据时，执行data事件回调函数
    req.on("data",function(){
        
    })

    // req 的end事件 - 当所有客户端消息给 node服务发送接收完成，执行end事件回调函数
    req.on("end",function(){
        // req.url  客户端请求发送的地址
        // 获取地址？后的数据
        var str = req.url.split("?")[1];
        // node方法：parse()  讲地址字符串数据转换成 对象
        var obj = str.query.parse(str)
        var sum = Number(obj.x)+Number(obj.j)
        // ---------上面都在处理客户端发过来的数据

        // ---------下面的内容就是服务端发送客户端的信息
        // 给响应消息对象中写入要发送的内容
        // writeHead(状态，响应消息的内容)  设置响应消息头
        // 200 代表返回访问成功
        res.writeHead(200,{
            // 设置响应头的文本内容及编码
            "content-type":"text/html;charset=utf-8",
            // 设置允许跨域访问的地址，*是通配符，代表任何人可以访问
            "Access-Control-Allow-Origin":"*"
        })
        // write(返回给客户端的信息)  
        res.write(sum.toString())
        // 发送：end()
        res.end()
    })
})

// 开启服务 listen(端口，网站域名，执行函数)
// 停止服务：ctrl+v 
// 如果修改了node服务，就需要停止原来的服务，重新开启服务
// 侦听事件对象 - server - 客户端
server.listen(4010,"loaclhost",function(){
    console.log("开启了服务")
})