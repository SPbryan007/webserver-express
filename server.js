const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static( __dirname + '/public'));
//Express hbs
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');
//Helpers

app.get('/', (req, res) => {

  res.render('home',{
     nombre:'pAoLa andRea'
  });

});
app.get('/about', (req, res) => {

  res.render('about');

});
// app.get('/', (req, res) => {
//
//   res.render('home',{
//      nombre:'Bryan',
//      anio:new Date().getFullYear()
//   });
//
// });
// app.get('/', (req, res) => {
//   //res.send('Hello World')
//   let salida = {
//       nombre:'Bryan',
//       edad:32,
//       url:req.url
//   };
//
//   res.send(salida);
// })
// app.get('/data', (req, res) => {
//   res.send('Hello Data')
// })

app.listen(port,()=>{
    console.log(`Escuchando Peticiones en el puerto ${port}`);
});
