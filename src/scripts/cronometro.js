const time = document.getElementById('cronometro')
let tempo = 0

function contaTempo() {
    tempo++
    time.innerText = converterSegundoMinutes(tempo);
}

function converterSegundoMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}