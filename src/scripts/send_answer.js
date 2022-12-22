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
        if(dados.resultado == 'correto') {
            console.log('certo!')
            get_pergunta()
        } else {
            console.log('errado')
        }
    })
    .catch(error => console.error(error));
}

button1.addEventListener('click', function() {
    send_answer(1)
    console.log('O botão 1 foi clicado!');
});

button2.addEventListener('click', function() {
    send_answer(2)
    console.log('O botão 2 foi clicado!');
});

button3.addEventListener('click', function() {
    send_answer(3)
    console.log('O botão 3 foi clicado!');
});

button4.addEventListener('click', function() {
    send_answer(4)
    console.log('O botão 4 foi clicado!');
});