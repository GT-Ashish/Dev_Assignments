const input = document.querySelector('.js-input');
const addButton = document.querySelector('.js-add-button');
let array = [];
addButton.addEventListener('click',() =>{
    array.push(input.value);
    input.value = null;
    console.log(array);
});
const input2 = document.querySelector('.js-input-2');
const addButton2 = document.querySelector('.js-add-button-2');
const listText = document.querySelector('.js-list-text-1');
let array2 = [];
let acc = '';
listText.innerHTML = acc;
addButton2.addEventListener('click',() =>{
    // array2.push(input2.value);
    // array2.push('<br>');
    // acc = array2.join("");
    acc += `${input2.value} <br>`;
    input2.value = null;
    listText.innerHTML = acc;    
});

const input3 = document.querySelector('.js-input-3');
const dateInput = document.querySelector('.js-date-input');
const addButton3 = document.querySelector('.js-add-button-3');
const listText2 = document.querySelector('.js-list-text-2');
let array3 = [];
let acc2 = '';
listText2.innerHTML = acc2;
addButton3.addEventListener('click',() =>{
    acc2 += `<span>${input3.value}</span> ${dateInput.value}<button class="delete-button"> Delete</button><br>`;
    input3.value = null;
    dateInput.value = null;
    listText2.innerHTML = acc2;    
});
