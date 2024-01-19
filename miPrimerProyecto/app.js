const express= require("express");//nos permite importar 
const bodyParser = require("body-parser");
const app=express();// se tiene acceso a todas los servicios de express
const puerto=3001;
//Peticion que se compone de la accion get y un URL 

app.use(bodyParser.json());
//get Retorna arreglo de contactos
app.use("/contactos",(request, response,next)=>{
    console.log("ingresa a middleware");
    console.log("headers:" ,request.headers);
    console.log("body:" ,request.body);//requiere de Parse

    next();
});

app.get("/contactos",(request,response)=>{
    const contactos =[
        {id:1,nombre:"Santiago", apellido:"Mosquera", celular: "0992920322"},
        {id:2,nombre:"Lorena", apellido:"Martinez", celular: "0978562133"},
        {id:3,nombre:"Martin", apellido:"Calle", celular: "0982454454"},
    ]
    console.log("Ingresa a get");
    response.send(contactos);
});

app.post("/contactos", (req,resp)=>{
    req.body.id=99;
    resp.send(req.body);
});

app.put("/contactos/:idParam",(req, resp)=>{
    const id=req.params.idParam;
    console.log("id",id);
    resp.send(req.body);
})

app.delete("/contactos/:id",(req, resp)=>{
    const id= req.params.id;
    console.log("id:", id);
    resp.send(req.body);
})

// levanta un servidor web 
app.listen(puerto,()=>{
    console.log("Servidor Listo en el puerto "+ 3001);
}); 