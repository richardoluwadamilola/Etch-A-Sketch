'use strict'

// create a default 16X16 grid sized sqaures
const container = document.querySelector("#container");
const clearButton = document.querySelector(".clearGrid");
const rainbowButton = document.querySelector(".rainbowMode");
const activeLight = document.querySelector(".active");
let active = false;

function createGrid(rows = 16, columns = 16) {
    let total = (rows * columns);
    for(let i = 0; i < total; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => colorGrid(square));
        container.style.setProperty('grid-template-columns', `repeat(${columns}, 2fr)`);
        container.style.setProperty('grid-template-rows', `repeat(${rows}, 2fr)`);
        container.appendChild(square);
    };
};
createGrid(16,16);

function clearGrid(amount = 16) {
    container.innerHTML = '';
    amount = Number(prompt('How many squares would you like? (1-100)', ''));
    if(amount > 100) {
        alert('Too Many Squares! Try Again.');
    } else if (amount <= 0) {
        amount = 16;
    }
    createGrid(amount, amount)
}

function colorGrid(square) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    if(active) {
        square.classList.remove('black');
        square.style.setProperty('background-color', `rgb(${r},${g},${b})`);
    } else {
        square.classList.add('black');
    }
}

function rgb() {
    activeLight.classList.toggle('blue');
    active = !active;
    console.log(active);
}

clearButton.addEventListener('click', clearGrid);
rainbowButton.addEventListener('click', rgb);