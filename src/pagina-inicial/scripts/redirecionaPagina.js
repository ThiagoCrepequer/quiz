document.addEventListener('keypress', function(res) {
    if((res.key == 'r' || res.key == 'R') && controla_comeco == 0) {
        window.location.replace('/rank')
    }
    if((res.key == 'h' || res.key == 'H') && controla_comeco == 0) {
        window.location.replace('/help')
    }
})