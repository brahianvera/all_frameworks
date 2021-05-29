'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var article_schema = schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', article_schema);
//Mongo db pluraliza el nombre del Article. quedaria como articles