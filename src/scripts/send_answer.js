button1 = document.getElementById('button1')
button2 = document.getElementById('button2')
button3 = document.getElementById('button3')
button4 = document.getElementById('button4')

function send_answer(numero_alternativa) {
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
    send_answer(1)
});

button2.addEventListener('click', function() {
    send_answer(2)
});

button3.addEventListener('click', function() {
    send_answer(3)
});

button4.addEventListener('click', function() {
    send_answer(4)
});