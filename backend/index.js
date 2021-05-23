'use strict'

var mongoose = require('mongoose');

//Desactiva los metodos antiguos
mongoose.set('useFindAndModify',false);
//Esto se usa para hacer promesas 
mongoose.Promise = global.Promise;


//Conectar a la base de datos desde mongo
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser:true})
    .then(()=>{
        console.log('Conexion correcta');
    });