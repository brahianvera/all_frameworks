'use strict'

var mongoose = require('mongoose');
var app = require("./app");
var port = 3900;

//Desactiva los metodos antiguos
mongoose.set('useFindAndModify',false);
//Esto se usa para hacer promesas 
mongoose.Promise = global.Promise;


//Conectar a la base de datos desde mongo
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser:true})
    .then(()=>{
        console.log('Conexion correcta');

        //Crear servidor y ponerme a escuchar peticiones HTTP
        app.listen(port,()=>{
            console.log("its working");
        })

    })
    .catch((err) => {console.log(err)});