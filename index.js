const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const getPergunta = require('./mongodb')

var contagem

// API para o metodo get
app.get('/pergunta', (req, res) => {
    getPergunta(contagem).then(pergunta => {
        var pergunta_alternativas = {
            alternativas: pergunta.alternativas,
            pergunta: pergunta.pergunta
        }
        res.send(pergunta_alternativas)
    });
});

// Metodo post
app.use(bodyParser.json());

app.post('/reposta', (req, res) => {
    var alternativa = req.body
    getPergunta(contagem).then(pergunta => {
        console.log(pergunta.correta == alternativa.alternativa)
        if(pergunta.correta == alternativa.alternativa) {
            var alternativa_correta = {
                resultado: "correto"
            }

            contagem++

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

    contagem = 1
});

app.listen(80, () => {
    console.log('Server GET listening on port 80');
});
