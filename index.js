const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session')
const app = express();
const getPergunta = require('./mongodb')
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')
dotenv.config({debug: true})


const url = process.env.URL_MONGO;

var client

async function connectClient() {
    console.log('Iniciada uma nova conexão')
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    return client
}
connectClient().then(res => {
    console.log('Conexão estabelecida')
    client = res
})

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// API para o metodo get
app.get('/pergunta', (req, res) => {
    getPergunta(req.session.contagem, client).then(pergunta => {
        try {
                var pergunta_alternativas = {
                alternativas: pergunta.alternativas,
                pergunta: pergunta.pergunta
            }
            res.send(pergunta_alternativas)
        } catch(err) {
            console.log(err)
        }
    });
});

// Metodo post
app.use(bodyParser.json());

app.post('/reposta', (req, res) => {
    var alternativa = req.body
    
    getPergunta(req.session.contagem, client).then(pergunta => {
        if(pergunta.correta == alternativa.alternativa) {
            req.session.contagem++
            var alternativa_correta = {
                resultado: "correto",
                contador: req.session.contagem
            }
            res.json(alternativa_correta)
        } else {
            var alternativa_errada = {
                resultado: "errado"
            }
            res.json(alternativa_errada)
        }   
    });
});

// Pagina principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
    app.use(express.static('src'))
    
    req.session.contagem = 1
});

app.listen(80, '192.168.0.195', () => {
    console.log('Server GET listening on port 80');
});
