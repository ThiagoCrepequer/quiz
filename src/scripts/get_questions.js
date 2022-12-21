function get_pergunta() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://127.0.0.1/pergunta')
    xhr.onload = () => {
        if (xhr.status === 200) {
            json = xhr.response
            conteudo = JSON.parse(json)

            alternativas = conteudo[0].alternativas
            pergunta = conteudo[0].pergunta

            return alternativas
        } else {
            console.error(xhr.statusText)
        }
    }
    xhr.send()
}