var http=require("http");
var query=require("querystring");
var arr=[];
var ids=0;
var server=http.createServer(function(req,res){
    var str="";
    req.on("data",function(_data){
        str=_data.toString();
     
    });
    req.on("end",function(){
        if(req.method.toLowerCase()==="get"){
            str=req.url.split("?")[1];
            // console.log(str);
            str=decodeURIComponent(str);
            var obj=JSON.parse(str);
            console.log(obj);
        }
        
      
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8",
            "Access-Control-Allow-Origin":"*",
            // 允许请求头数据跨域
            "Access-Control-Allow-Headers":"*"
        })
        var obj={a:30,b:40,c:[1,2,3]}
        res.write(JSON.stringify(obj));
        res.end();
    })
})

server.listen(4010);