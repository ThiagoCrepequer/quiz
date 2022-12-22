var p_pergunta = document.getElementById('Pergunta')
button1 = document.getElementById('button1')
button2 = document.getElementById('button2')
button3 = document.getElementById('button3')
button4 = document.getElementById('button4')

function get_pergunta() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://127.0.0.1/pergunta')
    xhr.onload = () => {
        if (xhr.status === 200) {
            json = xhr.response
            conteudo = JSON.parse(json)

            alternativas = conteudo.alternativas
            pergunta = conteudo.pergunta

            p_pergunta.innerText = pergunta
            
            button1.value = alternativas[1]
            button2.value = alternativas[2]
            button3.value = alternativas[3]
            button4.value = alternativas[4]
        } else {
            console.error(xhr.statusText)
        }
    }
    xhr.send()
}