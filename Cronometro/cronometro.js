const Cronometro = document.querySelector(".cronometro");

let segundo = 0
let minutes = 0
let hours = 0
let stopTime = true
let intervalCronometro;

function iniciarCronometro() {
    if (stopTime) {
        stopTime = false;
        intervalCronometro = setInterval(cicloDeTempo, 1000);
    }
}

function paraCronometro() {
    if (!stopTime) {
        stopTime = true;
        clearInterval(intervalCronometro)
    }
}

const cicloDeTempo = () => {
    if (!stopTime) {
        segundo = parseInt(segundo);
        minutes = parseInt(minutes);
        hours = parseInt(hours);

        segundo = segundo + 1
    
        if (segundo == 60) {
            minutes = minutes + 1
            segundo = 0;
        }

        if (minutes == 60) {
            hours = hours + 1
            minutes = 0;
            segundo = 0;
        }

        if (segundo < 10 || segundo == 0) {
            segundo = '0' + segundo;
        }

        if (minutes < 10 || minutes == 0) {
            minutes = '0' + minutes;
        }

        if (hours < 10 || hours == 0) {
            hours = '0' + hours;
        }
        Cronometro.innerHTML = hours + ':' + minutes + ':' + segundo;
    } 
} 
 
  
function resetCronometro() {
    clearInterval(intervalCronometro)
    Cronometro.innerHTML = '00:00:00';
    stopTime = true;
    hours = 0;
    minutes = 0;
    segundo = 0;
}
