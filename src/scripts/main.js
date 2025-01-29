// Data final.
const countDownDate = new Date("March 19, 2027 00:00:00").getTime();

// Função para calcular a distâncias em dias e horas da data desejada.
function countdown() {
    const now = new Date();
    // Utiliza a countDownDate definida globalmente.
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Calculos relacionados a caso estivermos no mesmo dia ou nos dias seguintes.
    if (distance <= 0) {
        var negativeSign = '-'
        // adiciona um número a contagem de dias arredondada, o operador é negativo porque a operação é invertida quando o cálculo de dias fica negativo.
        var fRoundedDays = days - 1
    } else {
        var negativeSign = ''
        // adiciona um número a contagem de dias arredondada. aqui o operador está correto, pois a operação não é invertida.
        var fRoundedDays = days + 1
    }

    // formata a hora
    const formattedHour = `${negativeSign}${padZero(Math.abs(hours))}:${padZero(Math.abs(minutes))}:${padZero(Math.abs(seconds))}`;

    // Atualize o valor de tempo no HTML.
    document.getElementById("exactData").innerText = `${days} Dias e ${formattedHour}`;
    // arredonda os dias adicionando mais um a contagem.
    document.getElementById("roundedDays").innerText = `${fRoundedDays} Dias`;


    // Função para garantir que sempre mostre dois dígitos.
    function padZero(num) {
        return num < 10 ? "0" + num : num;
    }
}

// Atualiza o contador a cada segundo.
setInterval(countdown, 1000);

// Seção da execução de áudio.
const vAudio = document.getElementById("sonicAudio");
const vAudioButton = document.getElementById("audioButton");

vAudioButton.addEventListener("click", function () {
    if (vAudio.paused) {
        vAudio.play();
        vAudioButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        vAudio.pause();
        vAudioButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});