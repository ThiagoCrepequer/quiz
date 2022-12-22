var controla_comeco = 0

document.addEventListener('keypress', function(res) {
    if(controla_comeco == 0 && res.key == 'Enter') {
        var texto_comeco = document.getElementById('texto-comeco')
        texto_comeco.hidden = true

        get_pergunta()
    }
})