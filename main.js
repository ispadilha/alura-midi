function playSound(idAudioElement) {
    // document.querySelector(idAudioElement).play();
    const element = document.querySelector(idAudioElement);

    if (element && element.localName === "audio") {
        element.play();
    }
    else {
        console.log("Elemento não encontrado ou seletor inválido.");
    }
}

const keysList = document.querySelectorAll('.tecla');

for (let i = 0; i < keysList.length; i++) {
    const key = keysList[i];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (este_evento) {
        if (este_evento.code === "Space" || este_evento.code === "Enter") {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}
