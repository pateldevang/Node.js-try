const express = require("express");
var bodyParser = require("body-parser")
var app = express();
app.use(bodyParser.json())
app.get('/',(req,res)=>{
	res.send("Hello World First Node JS");
});
app.post("/add",(req,res)=>{
	const a = req.body.a;
	const b= req.body.b;
	console.log("Adding");
	res.send({sum: a+b});
});
app.listen(3000);
