function playSound(idAudioElement) {
    document.querySelector(idAudioElement).play();
}

const keysList = document.querySelectorAll('.tecla');

let i = 0;

while (i < keysList.length) {
    const key = keysList[i];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function () {
        playSound(idAudio);
    }

    i = i + 1;
}