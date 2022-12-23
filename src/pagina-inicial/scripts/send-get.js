var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')
//let p_pergunta = document.getElementById('Pergunta')
let formulario_questoes = document.getElementById('formulario-questoes') 

function get_pergunta() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/pergunta')
    xhr.onload = () => {
        if (xhr.status === 200) {
            json = xhr.response
            conteudo = JSON.parse(json)

            var alternativas = conteudo.alternativas
            var pergunta = conteudo.pergunta

            escrevePergunta(pergunta, alternativas)
        } else {
            console.error(xhr.statusText)
        }
    }
    xhr.send()
}

function send_question(numero_alternativa) {
    const alternativa = { alternativa: numero_alternativa }

    fetch('/reposta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alternativa)
    })
    .then(response => response.json())
    .then(dados => {
        somaPontos(dados.resultado)
        if(dados.resultado == 'correto') {
            formulario_questoes.style.opacity = 0;

            if(dados.contador == 10) { fim_reiniciar(); return } 
            else {
                get_pergunta()
            }
        }
    })
    .catch(error => console.error(error));
}

button1.addEventListener('click', function() {
    send_question(1)
});

button2.addEventListener('click', function() {
    send_question(2)
});

button3.addEventListener('click', function() {
    send_question(3)
});

button4.addEventListener('click', function() {
    send_question(4)
});