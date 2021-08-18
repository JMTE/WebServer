const express = require('express');
const hbs = require('hbs');
const app = express()
const port=8080;


//Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/parciales');
//Crear carpeta views



//Servir contenido estatico

app.use(express.static('public'))
 

 
// app.get('/hola-mundo', function (req, res) {
//     res.send('Hola Mundo en su ruta')
//   })

//   app.get('*', function (req, res) {
//     res.sendFile(__dirname+'/public/404.html')  //El dirname nos construye el path de donde se encuentra la app
//   })

const datos={

  nombre:'JMTE',
  titulo:'NodeJS'

}
   
app.get('/', function (req, res) {
  res.render('home',datos);
})


  app.get('/generic', function (req, res) {
    res.render('generic',datos)
  })

  app.get('/elements', function (req, res) {
    res.render('elements',datos)
  })


app.listen(port, ()=>{
    console.log(`El ejemplo que hemos realizado esta corriendo en el puerto ${port}`);
});