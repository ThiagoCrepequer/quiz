var controla_comeco = 0
var intevalor

document.addEventListener('keypress', function(res) {
    if(controla_comeco == 0 && res.key == 'Enter') {
        var texto_comeco = document.getElementById('texto-comeco')
        texto_comeco.hidden = true

        get_pergunta()
        intervalo = setInterval(contaTempo, 1000)
    }
})

function fim_reiniciar() {
    let fim = document.getElementById('fim')
    let div_jogo = document.getElementById('div-jogo')
    
    fim.hidden = false
    div_jogo.hidden = true

    clearInterval(intervalo)
    //location.reload(true);
}