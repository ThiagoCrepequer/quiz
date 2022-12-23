let p_pergunta = document.getElementById('Pergunta')
let formulario = document.getElementById('formulario-questoes')

function escrevePergunta(pergunta, alternativas) {
    let arrayPergunta = pergunta.split('')
    let arrayEscrito = []
    i = 0
    var intervalo2 = setInterval(function() {
        arrayEscrito.push(arrayPergunta[i])
        p_pergunta.innerText = arrayEscrito.join('')

        i++
        if(arrayPergunta.length == i) {
            
            intervalo = setInterval(contaTempo, 1000)
            adicionaAlternativas(alternativas)
            clearInterval(intervalo2)
        } 
    }, 60)
}

function adicionaAlternativas(alternativas) {
    button1.value = alternativas[1]
    button2.value = alternativas[2]
    button3.value = alternativas[3]
    button4.value = alternativas[4]

    formulario.style.opacity = 1;
}