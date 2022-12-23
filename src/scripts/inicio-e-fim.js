var controla_comeco = 0
var intevalor

function inicio() {    
    var texto_comeco = document.getElementById('texto-comeco')
    texto_comeco.hidden = true
    
    let div_jogo = document.getElementById('div-jogo')
    div_jogo.hidden = false

    get_pergunta()
}


document.addEventListener('keypress', function(res) {
    if(controla_comeco == 0 && res.key == 'Enter') {        
        console.log('o jogo começou')
        controla_comeco++
        inicio()
    }
})

document.addEventListener('click', function() {
    if(controla_comeco == 0) {
        console.log('o jogo começou')
        controla_comeco++
        inicio()
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