button1 = document.getElementById('button1')
button2 = document.getElementById('button2')
button3 = document.getElementById('button3')
button4 = document.getElementById('button4')
let p_pergunta = document.getElementById('Pergunta')
let formulario_questoes = document.getElementById('formulario-questoes') 

function get_pergunta() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://127.0.0.1/pergunta')
    xhr.onload = () => {
        if (xhr.status === 200) {
            formulario_questoes.hidden = false
            imprimeValores()
            
            json = xhr.response
            conteudo = JSON.parse(json)

            alternativas = conteudo.alternativas
            pergunta = conteudo.pergunta

            p_pergunta.innerText = pergunta
            
            button1.value = alternativas[1]
            button2.value = alternativas[2]
            button3.value = alternativas[3]
            button4.value = alternativas[4]
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