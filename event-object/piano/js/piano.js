'use strict';

const middle = ['sounds/middle/first.mp3', 'sounds/middle/second.mp3', 'sounds/middle/third.mp3', 'sounds/middle/fourth.mp3', 'sounds/middle/fifth.mp3']

const higher = ['sounds/higher/first.mp3', 'sounds/higher/second.mp3', 'sounds/higher/third.mp3', 'sounds/higher/fourth.mp3', 'sounds/higher/fifth.mp3']

const lower = ['sounds/lower/first.mp3', 'sounds/lower/second.mp3', 'sounds/lower/third.mp3', 'sounds/lower/fourth.mp3', 'sounds/lower/fifth.mp3']

const keyboard = document.getElementsByClassName('set')[0];

const keys = Array.from(keyboard.getElementsByTagName('li'));

keys.forEach((key, i) => {
    key.addEventListener('click', function() {
        let note = this.getElementsByTagName('audio')[0];
        note.src = middle[i];
        if (keyboard.classList.contains('higher')) {
            note.src = higher[i];
        } else if (keyboard.classList.contains('lower')) {
            note.src = lower[i]
        } else note.src = middle[i];
        note.play();
    });
});

function pianoRegisterChange(event) {
    if (event.key === 'Alt') {
        keyboard.classList.remove('middle');
        keyboard.classList.add('higher');
    }
    if (event.key === 'Shift') {
        keyboard.classList.remove('middle');
        keyboard.classList.add('lower');
    }
}

function pianoRegisterDefault(event) {
    keyboard.classList.remove('higher');
    keyboard.classList.remove('lower');
    keyboard.classList.add('middle')
}

document.addEventListener('keydown', pianoRegisterChange);
document.addEventListener('keyup', pianoRegisterDefault);
