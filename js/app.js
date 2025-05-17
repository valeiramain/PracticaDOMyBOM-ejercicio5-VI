
function iniciarCronometro() {
    // trae el h1 que muestra el cronometro
    const cronometro = document.querySelector('h1')

    if (segundos < 59) {
        segundos = segundos + 1
    } else {
        segundos = 0
        if (minutos < 59) {
            minutos = minutos + 1
        } else {
            minutos = 0
            if (horas < 23)
                horas = horas + 1
            else {
                horas = 0
            }
        }
    }

    // mostrar cronometro como texto
    let seg = segundos < 10 ? '0' + segundos : segundos;
    let min = minutos < 10 ? '0' + minutos : minutos;
    let hor = horas < 10 ? '0' + horas : horas;

    cronometro.textContent = `${hor}:${min}:${seg}`;
    console.log(cronometro)

}


//-------------LOGICA----------------

    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    let intervalo = null;

console.log(document.querySelector('#btnIniciar'))

document.querySelector('#btnIniciar').addEventListener('click', () => {
    if (!intervalo) {
        intervalo = setInterval(iniciarCronometro, 1000);
        document.querySelector('#btnIniciar').disabled = true;
    }else{
        document.querySelector('#btnIniciar').disabled = false;
    }
});

document.querySelector('#btnPausar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    document.querySelector('#btnIniciar').disabled = false;
});

document.querySelector('#btnReiniciar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.querySelector('h1').textContent = '00:00:00';
    document.querySelector('#btnIniciar').disabled = false;
})