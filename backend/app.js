'use strict'

//Cargar modulos de node para crar servidor
var express = require('express');
var body_parser = require('body-parser');

//Ejecutar express(http)
var app = express();

//Cargar ficheros rutas
var article_routes = require('./routers/articles');


//Middlwares
app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json());

//CORS

//Añadir prefijos o rutas / Cargar rutas
app.use('/api', article_routes);

//Exportar modulo(fichero actual)
module.exports = app;