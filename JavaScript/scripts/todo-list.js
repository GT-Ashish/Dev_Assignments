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
const listText = document.querySelector('.js-list-text');
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
// const input3 = document.querySelector('.js-input-3');
// const addButton3 = document.querySelector('.js-add-button-3');
// const listText = document.querySelector('.js-list-text');
// let array3 = [];
// let acc2 = '';
// listText.innerHTML = acc2;
// addButton2.addEventListener('click',() =>{
//     acc2 += `${input2.value} <button> delete</button><br>`;
//     input3.value = null;
//     listText.innerHTML = acc2;    
// });
