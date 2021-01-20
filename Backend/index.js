'use strict'

const { urlencoded } = require('body-parser');
var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise; // Promesa para la conexion con MongoDB
mongoose.connect('mongodb://localhost:27017/articles', {useUnifiedTopology: true, useNewUrlParser:true})
        .then(() => {
            console.log("Conecction with MongoDB is successfull");

            //Create server and listen HTTP requests
            app.listen(port, () => {
                console.log('Server run in http://localhost:' + port);
            });
        });