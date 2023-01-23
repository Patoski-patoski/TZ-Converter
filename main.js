"use strict";

const inputNation = document.querySelector('.input-nation');
const inputTime = document.querySelector('.input.time');
const outputText = document.querySelector('#result-text');
const h2 = document.querySelector('#h2');
const select = document.querySelector('#select');
const btn = document.querySelector('button');

const inputNationValue = inputNation.value;
const inputTimeValue = inputTime.value;

console.log(inputTimeValue); 


btn.addEventListener('click', ()=>{
    if (inputNationValue == '' || inputTimeValue === '') {
        h2.textContent = 'Please input valid parameters';
        h2.style.color = 'red';  
    }

    else{

        h2.textContent = `${inputNationValue}`
        
    }
})