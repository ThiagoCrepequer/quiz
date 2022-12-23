var erros = 0

let p_erros = document.getElementById('resultado-erros')

function mudaCores(erros) {
    var span_erros = document.getElementById('span-erros')
    if(erros == 1) {
        console.log('a')
        span_erros.style.color = 'yellow'
    }
    if(erros == 2) {
        span_erros.style.color = 'red'
        span_erros.style.animation = 'pisca 1s ease-in-out infinite'
    }
    if(erros == 3) {
        span_erros.style.color = 'black'
        span_erros.style.animation = ''
        derrota()
    }
}

function somaPontos(condicao) {
    if(condicao == 'correto') {
        return
    } else {
        erros++
    }
    mudaCores(erros)
    imprimeValores()
}

function imprimeValores() {
    p_erros.hidden = false

    var span_erros = document.getElementById('span-erros')
    span_erros.innerHTML = erros 
    
}