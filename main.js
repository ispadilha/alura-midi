function playSound(idAudioElement) {
    document.querySelector(idAudioElement).play();
}

const keysList = document.querySelectorAll('.tecla');

for (let i = 0; i < keysList.length; i++) {
    const key = keysList[i];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }


}
