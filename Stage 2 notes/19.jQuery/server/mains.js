var http=require("http");
var query=require("querystring");
var arr=[];
var ids=0;
var server=http.createServer(function(req,res){
    var str="";
    req.on("data",function(_data){
        str=_data.toString();
        console.log(str);
    });
    req.on("end",function(){
        if(req.method.toLowerCase()==="get"){
            str=req.url.split("?")[1];
            console.log(str);
        }
        
      
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8",
            "Access-Control-Allow-Origin":"*",
            // 允许请求头数据跨域
            "Access-Control-Allow-Headers":"*"
        })
        res.write("已接收");
        res.end();
    })
})

server.listen(4010,"localhost",function(){
    console.log("服务器连接成功")
});