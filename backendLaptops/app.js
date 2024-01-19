const express= require("express");
const bodyParser = require("body-parser");
const app=express();
const puerto=3005;

app.use(bodyParser.json());

app.use("/laptops",(request,response,next)=>{
    console.log("body:" ,request.body);//requiere de Parse
    next();
});

app.post("/laptops",(request,response)=>{
    request.body.id=12;
    response.send(request.body);
   
});

app.get("/laptops/:id",(request,response)=>{
    const id=request.params.id;
    console.log(id);
    request.body.id=id;

    response.send(request.body);
});
app.get("/laptops",(request,response)=>{
    
    const laptops =[
        {id:100,marca:"Lenovo", proceso:"Intel Core i7", memoria: "16 GB", disco:"1 TB"},
        {id:101,marca:"HP", proceso:"Intel Core i5", memoria: "8 GB", disco:"2 TB"},
        {id:102,marca:"Toshiba", proceso:"Intel Core i7", memoria: "32 GB", disco:"1 TB"},
        {id:103,marca:"Lenovo", proceso:"Intel Core i5", memoria: "16 GB", disco:"2 TB"},
        {id:104,marca:"Acer", proceso:"Intel Core i3", memoria: "16 GB", disco:"3 TB"},
    ]
    
    response.send(laptops);
});

app.put("/laptops/:idParam",(req, resp)=>{
    const id=req.params.idParam;
    console.log("id",id);
    resp.send(req.body);
})
app.delete("/laptops/:idParam",(req, resp)=>{
    const id=req.params.idParam;
    console.log("id",id);
    resp.send("200");
})

// levanta un servidor web 
app.listen(puerto,()=>{
    console.log("Servidor Listo en el puerto "+ puerto);
}); 