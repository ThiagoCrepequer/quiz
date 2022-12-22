var acertos = 0
var erros = 0

let p_acertos = document.getElementById('resultado-acertos')
let p_erros = document.getElementById('resultado-erros')

function somaPontos(condicao) {
    if(condicao == 'correto') {
        acertos++
    } else {
        erros++
    }
    imprimeValores()
}

function imprimeValores() {
    p_acertos.innerText = "Nº de acertos: " + acertos
    p_erros.innerText = "Nº de erros: " + erros
}