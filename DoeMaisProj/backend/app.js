const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('./models/usuario');
const Campanha = require('./models/campanha');
const Lembrete = require('./models/lembrete');
const UsuarioLog = require('./models/usuarioLog');
//const checkAuth = require ('./middleware/check-auth');

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

const lembretes = [
    {
        id: '1',
        campSelect: 'O coração precisa de você',
        data: '14/08/21',
        horario: '10:30',
        local: 'R. Des. Eliseu Guilherme, 147 - Paraíso, São Paulo - SP, 04004-030'
    }
]

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});
// post registros de usuarios
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
//get lista de regitros de usuarios
app.get('/api/usuarios', (req, res, next) => {
    Usuario.find().then(documents => {
        console.log(documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            usuarios: documents
        });
    })
});
//use lista de registros de usuarios
app.use('/api/registo', (req, res, next) => {
    res.status(200).json({
        mensagem: "tudo OK",
        usuarios: usuarios
    })
});
//get de lista de campanhas
app.get('/api/campanhas', (req, res, next) => {
    Campanha.find().then(documents => {
        console.log(documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            campanhas: documents
        });
    })
});
//get de filtro
app.get('/api/campanhas/:tipoSang', (req, res, next) => {
    Campanha.find({ tipoSang: req.params.tipoSang }).then(documents => {
        console.log(documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            campanhas: documents
        });
    })
});

// post lembretes de usuarios
app.post('/api/lembretes', (req, res, next) => {
    const lembrete = new Lembrete({
        campSelect: req.body.campSelect,
        data: req.body.data,
        horario: req.body.horario,
        local: req.body.local,
    })
    lembrete.save().then((lembreteInserido) => {
        console.log(lembrete);
        res.status(201).json({
            mensagem: 'Lembrete criado',
            id: lembreteInserido._id
        });
    });
});
//get lista de lembretes de usuarios
app.get('/api/lembretes', (req, res, next) => {
    Lembrete.find().then(documents => {
        console.log(documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            lembretes: documents
        });
    })
});
//delete lembrete
app.delete('/api/lembretes/:id', (req, res, next) => {
    Lembrete.deleteOne({ _id: req.params.id }).then(resultado => {
        console.log(resultado);
        res.status(200).json({
            mensagem: "Lembrete removido"
        })
    })
})
//use lista de lembrete de usuarios
app.use('/api/lembretes', (req, res, next) => {
    res.status(200).json({
        mensagem: "tudo OK",
        lembretes: lembretes
    })
});
//login usuario
app.post('/api/usuarioLog/login', (req, res, next) => {
    let user;
    UsuarioLog.findOne({ email: req.body.email }).then(u => {
        user = u;
        if (!u) {
            return res.status(401).json({
                mensagem: "email inválido"
            })
        }
        return bcrypt.compare(req.body.password, u.password);
    })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    mensagem: "senha inválida"
                })
            }
            const token = jwt.sign(
                {email: user.email, id: user._id},
                'minhasenha',
                {expiresIn: '1h'}
                )
                res.status(200).json({token: token})
        })
        .catch(err => {
            return res.status(401).json({
                mensagem: "Login falhou: " + err
            })
        })
})
//cadastrar usuario
app.post('/api/usuarioLog/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const usuarioLog = new UsuarioLog({
                email: req.body.email,
                password: hash
            })
            usuarioLog.save()
                .then((result) => {
                    res.status(201).json({
                        mensagem: "ok",
                        resultado: result
                    })
                })
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json({
                mensagem: "Tente novamente mais tarde"
            })
        })
});



module.exports = app;
