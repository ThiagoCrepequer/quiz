const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// API para o metodo get
app.get('/pergunta', (req, res) => {
    var test =  [{ pergunta: 'Qual a capital do Brasil', alternativas: { 1: 'São Paulo', 2: 'Rio de Janeiro', 3: 'Fortaleza', 4: 'Brasília' }}]
    
    res.send(test)
});

// Metodo post
app.use(bodyParser.json());

app.post('/reposta', (req, res) => {
    console.log(req.body);
});

// Pagina principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
    app.use(express.static('src'))
});

app.listen(80, () => {
    console.log('Server GET listening on port 3000');
});
