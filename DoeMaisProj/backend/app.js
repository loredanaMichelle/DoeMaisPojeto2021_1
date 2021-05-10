const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario');
const Campanha = require('./models/campanha')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://api-access:doemaisdbpassword123@doemais-db.kxdnu.mongodb.net/db_doemais?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conexão OK")
    }).catch(() => {
        console.log("Conexão NOK")
    });

const usuarios = [
    {
        id: '1',
        nome: 'Jose',
        cpf: '12589466857',
        idade: '19',
        endereco: 'rua jaragua',
        celular: '154896857',
        tipoSanguineo: 'A+'
    }
]

const campanhas = [
    {
        id: '1',
        cnpjInsti: '79.995.424/0001-93',
        titulo: 'O coração precisa de você',
        tipoSang: 'A+',
        dataIni: '16/04/2021',
        dataFim: '30/04/2021',
        horaIni: '08h00',
        horaFim: '16h00',
        local: 'R. Des. Eliseu Guilherme, 147 - Paraíso, São Paulo - SP, 04004-030'
    }
]

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/registro', (req, res, next) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade,
        endereco: req.body.endereco,
        celular: req.body.celular,
        tipoSanguineo: req.body.tipoSanguineo
    })
    usuario.save();
    console.log(usuario);
    res.status(201).json({ mensagem: 'Usuario registrado' })
})

app.get('/api/usuarios', (req, res, next) => {
    Usuario.find().then(documents => {
        console.log (documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            usuarios: documents
        });
    })
});

app.use('/api/registo', (req, res, next) => {
    res.status(200).json({
        mensagem: "tudo OK",
        usuarios: usuarios
    })
});

app.get('/api/campanhas', (req, res, next) =>{
    Campanha.find().then(documents => {
        console.log (documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            campanhas: documents
        });
    })
});


module.exports = app;
