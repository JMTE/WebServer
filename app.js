const express = require('express')
const app = express()
const port=8080;

//Servir contenido estatico

app.use(express.static('public'))
 

 
app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su ruta')
  })

  app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html')  //El dirname nos construye el path de donde se encuentra la app
  })
app.listen(port, ()=>{
    console.log(`El ejemplo que hemos realizado esta corriendo en el puerto ${port}`);
});