const lamp = document.getElementById('lamp');
let isOn = false;
let isBroken = false;
let timer;
let turnOnCount = 0;
let lastTurnedOff = Date.now();

function ligarLampada() {
    if (!isBroken && (Date.now() - lastTurnedOff) >= 5000) {
        lamp.src = '../img/lampada-ligada.jpeg';
        isOn = true;
        turnOnCount++;
        if (turnOnCount >= 5) {
            quebrarLampada();
        } else {
            clearTimeout(timer);
            timer = setTimeout(desligarLampada, 15000);

        }
    } else if (!isBroken) {
        lamp.src = '../img/lampada-ligada.jpeg';
        setTimeout(quebrarLampada, 10000);
    }
}

function desligarLampada () {
    if (!isBroken) {
        lamp.src = '../img/lampada-desligada.jpeg';
        isOn = false;
        lastTurnedOff = Date.now();
    }
}

function quebrarLampada() {
    lamp.src = '../img/lampada-quebrada.jpeg';
    isBroken = true;
    clearTimeout(timer);
}

lamp.addEventListener('mouseover', ligarLampada);
lamp.addEventListener('mouseout', () => {
    if (isOn) {
        clearTimeout(timer);
        timer = setTimeout(desligarLampada, 15000);
    }
});