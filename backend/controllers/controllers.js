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

    gatArticle:(req, res)=>{

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

        
    }
}; //end controller

module.exports = controller;