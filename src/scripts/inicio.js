var controla_comeco = 0

document.addEventListener('keypress', function(res) {
    if(controla_comeco == 0 && res.key == 'Enter') {
        var alternativas = get_pergunta()
    }
})