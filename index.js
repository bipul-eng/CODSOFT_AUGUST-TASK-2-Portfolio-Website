var con=require('./connection');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname));
app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');
});
app.post('/',function(req,res)
{
    var name=req.body.name;
    var email=req.body.email;
    var message=req.body.message;
    con.connect(function(error)
{
    if (error) throw error;
        var sql="INSERT INTO stalker(name1,email,message) VALUES(?,?,?)";
        con.query(sql,[name,email,message],function(error,result)
        {
            if (error) throw error;
        });
    });
}); 
app.listen(3308);