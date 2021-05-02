/* const express = require('express');
const appca = express();
const mongoose = require('mongoose');
const Campanha = require('./models/campanha') */

/* mongoose.connect('mongodb+srv://doemais1:doemais123@cluster0.xo06r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conexão OK camp")
    }).catch(() => {
        console.log("Conexão NOK")
    });

appca.find({},function(err, campanhas){
    if(err) console.warn(err);
    console.warn(campanhas);
})

appca.get('/api/campanhas', (req, res, next) => {
    Campanha.find().then(documents => {
        console.log (documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            usuarios: documents
        });
    })
});

module.exports = appca; */