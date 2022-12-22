function fim_reiniciar() {
    let fim = document.getElementById('fim')
    let div_jogo = document.getElementById('div-jogo')
    
    fim.hidden = false
    div_jogo.hidden = true

    clearInterval(intervalo)
    //location.reload(true);
}