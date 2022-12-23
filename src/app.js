const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session')
const app = express();
const getPergunta = require('./mongodb')

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// API para o metodo get
app.get('/pergunta', (req, res) => {
    getPergunta(req.session.contagem).then(pergunta => {
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
    getPergunta(req.session.contagem).then(pergunta => {
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
    res.sendFile(__dirname + '/pagina-inicial/index.html')
    app.use(express.static('src/pagina-inicial/'))
    
    req.session.contagem = 1
});

// Página help
app.get('/help', (req, res) => {
    res.sendFile(__dirname + '/help/index.html')
    app.use(express.static('src/help/'))
})

// Página rank
app.get('/rank', (req, res) => {
    res.sendFile(__dirname + '/rank/index.html')
    app.use(express.static('src/rank/'))
})

app.listen(80, '192.168.0.195', () => {
    console.log('Server GET listening on port 80');
});
