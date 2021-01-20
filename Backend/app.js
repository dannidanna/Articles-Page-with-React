//SERVER CREATE WITH EXPRESS.JS
'use strict'

//Load node modules to create server
var express = require('express');
var bodyParser = require('body-parser');

//Run express(http)
var app = express();

//Load routes
var article_routes = require('./Routes/article');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS es un middlewares, que se ejecuta antes de cada uno de los metodos
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // * Cualquier cliente pueda hacer peticiones ajax
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Add prefix to routes / Load routes
app.use('/api', article_routes);


// Add test route
/*app.post('/test', (req, res) => {
    var hola = req.body.hola;
    return res.status(200).send(
       {
           page: 'ReactPage',
           author: 'Danny Rodriguez',
           url: 'danny@',
           hola
       }
    );
});*/

//Export module (Current file)
module.exports = app;