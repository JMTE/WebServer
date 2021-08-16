
const http = require('http');

http.createServer((request, response)=>{


    response.write("Hola mundo");
    response.end();

}).listen(9200);


console.log("Escuchando el puerto", 9200);



// request ->Toda la informacion que me estan pidiendo en mi sitio web, los Headers, los argumentos
// response -> Es lo que el servidor le va a responder al cliente