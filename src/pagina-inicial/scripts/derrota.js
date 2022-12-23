function derrota() {
    let fim = document.getElementById('fim')
    let div_jogo = document.getElementById('div-jogo')
    let p_fim = document.getElementById('texto-fim')

    p_fim.innerText = 'Você perdeu o jogo, para tentar novamente aperte F5 ou atualize a página'
    fim.hidden = false
    div_jogo.hidden = true

    clearInterval(intervalo)
}