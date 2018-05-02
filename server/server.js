let express=require('express');
let app=express();
app.listen(3000);
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin',"http://localhost:8080");
	res.header("Acess-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
	res.header("Acess-Control-Allow-Methods","Push,Post,Get,Delete,OPTIONS");
	res.header("Acess-Control-Allow-Credentials",'true');
	res.header("X-Powered-By",'3.2.1')
	if (req.method==="OPTIONS") res.send(200);
	else next();
})
let sliders=require('./mock/slider')
//获取轮播数据，当访问slider的时候将数据返回
app.get('./slider',function(req,res){
	res.json(silders);
})
