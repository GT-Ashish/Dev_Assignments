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
listText2.innerHTML = JSON.parse(localStorage.getItem('html')) || "";
addButton3.addEventListener('click',() =>{
    let listObj = {
        task : input3.value,
        date : dateInput.value
    };
    array3.push(listObj);
    input3.value = null;
    dateInput.value = null;
    renderList();    
});

function renderList(){
    let html;
    for(let i = 0; i < array3.length; i++){
        html += `
        <div>
            ${array3[i].task}
        </div>
        <div>
            ${array3[i].date}
        </div>
        <button class="delete-button" onclick="
        array3.splice(${i}, 1);
        renderList();
        localStorage.setItem('html', JSON.stringify(html));
        ">
            Delete
        </button>
        `
    }
    localStorage.setItem('html',JSON.stringify(html));
    listText2.innerHTML = html;
};