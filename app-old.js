const http =require('http')

 http.createServer((req, res)=>{

   
    
    

    res.write("Hola Mundo");

    res.end();


}).listen( 9200 )

console.log("Escuchando el puerto",9200);