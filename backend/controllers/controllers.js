'use strict'

const { Query } = require('mongoose');
var validator = require('validator');
const article = require('../models/article');
var Article = require('../models/article')

var controller = {

    datos_curso: (req, res) =>{
        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'brahian vera WEB',
            url: 'bvrar.es',
            hola
        });
    },
    test: (req, res) =>{
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        })
    },

    save: (req, res)=>{
        //Recoger parametor por post 
        var  params = req.body;

        //Validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }

        if(validate_title && validate_content){
            //Crear el objeto a guardar
            var article = new Article();
            
            //Asignar valores 
            article.title = params.title;
            article.content = params.content;
            article.image = null;
            //Guardar articulo
            article.save((err,articleStored)=>{
                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    })
                }
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                })
            })
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            })
        }
    },
    get_articles:(req,res )=>{

        var  query =  Article.find({});
        var last = req.params.last;
        if(last || last != undefined){
            query.limit(5);
        };

        //Find
        // sort sirve para organizar los datos
        //find sirve para buscar en una base de datos
        query.sort('-_id').exec((err,articles)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los dartos'
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'success',
                    message: 'No hay articulos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            })
        });
    },

    getArticle:(req, res)=>{

        // Recoger el id del la url
        var article_id = req.params.id;

        // Comprobar que existe
        if(!article_id || !article_id == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !!!'
            });
        }

        //Buscar el articulo
        Article.findById(article_id,(err,article)=>{
            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'NO existe el articulo !!!'
                });  
            }
            //Devolver json
            return res.status(200).send({
                status: 'success',
                article
            });
        })

        
    },

    update:(req, res)=>{
        //Recoger el id del articul
        var article_id = req.params.id;

        //Recoger los datos que llegan por put 
        var  params = req.body;

        //Validar datos
        try{
            var validate_title  = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!!'
            });    
        }

        if(validate_title && validate_content){
            Article.findOneAndUpdate({_id:article_id},params,{new:true},
            (err,articleupdated)=>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: err
                    });          
                };
                if(!articleupdated){
                    return res.status(500).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });  
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleupdated
                });
            });
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'La validacion no es correcta'
            });     
        }

        //Fin update

    },
    delete:(req, res) => {
        //Recoger el id de la url
        var article_id = req.params.id
        //Find and delete
        Article.findOneAndDelete({_id:article_id}, (err, article_remove)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });    
            }else if(!article_remove){
                console.log(article_remove);
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista!!!'
                });   
            }else{
                return res.status(200).send({
                    status: 'success',
                    article: article_remove
                }); 
            }
        });  
    },

    upload: (req,res)=>{

        //configurar el modulo connect multiparty router/artcile.js

        //Recoger el fichero de la petición

        //Conseguir nombre y la extension del archivo

        //Comprobar la extension de larchivo, solo imagenes, si es valido borrar el fichero

        //si todo es valido 

        //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo

        return res.status(404).send({
            status: 'error',
            message: ' ddfsd fNo se ha borrado el articulo, posiblemente no exista!!!'
        });
    }
}; //end controller

module.exports = controller;