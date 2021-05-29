'use strict'

var express = require('express');
var article_controller = require("../controllers/controllers");

var router = express.Router();

//Rutas de prueba
router.get("/test-de-controllador", article_controller.test);
router.post("/datos-curso", article_controller.datos_curso);

//Rutas utiles
router.post('/save',article_controller.save);
//La interrogacion indica que la varibale no es obligatoria
router.get('/articles/:last?',article_controller.get_articles);
router.get('/article/:id',article_controller.gatArticle);


module.exports = router;