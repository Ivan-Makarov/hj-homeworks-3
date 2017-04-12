'use strict';

let nav = document.getElementsByTagName('nav')[0];

let secret = document.getElementsByClassName('secret')[0];

let userInput = [];

const SECRETCODE = ["KeyY", "KeyT", "KeyN", "KeyJ", "KeyK", "KeyJ", "KeyU", "KeyB", "KeyZ"];

document.addEventListener('keydown', key => {
    userInput.push(key.code);
    if (userInput.length >= SECRETCODE.length) {
        let userCode = userInput.slice(-SECRETCODE.length);
        let codeCorrect = true;
        userCode.forEach((key, i) => {
            if (key != SECRETCODE[i]) {
                codeCorrect = false;
            }
        });
        if (codeCorrect) {
            secret.classList.add('visible')
        };
    };
});

document.addEventListener('keydown', key => {
    if (key.ctrlKey && key.altKey) {
        if (key.code === 'KeyT') {
            nav.classList.toggle('visible');
        }
    }
});
