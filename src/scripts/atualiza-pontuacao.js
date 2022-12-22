var erros = 0

let p_erros = document.getElementById('resultado-erros')

function somaPontos(condicao) {
    if(condicao == 'correto') {
        return
    } else {
        erros++
    }
    imprimeValores()
}

function imprimeValores() {
    p_erros.innerText = "Nº de erros: " + erros
}