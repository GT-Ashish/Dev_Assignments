const displayText = document.querySelector('.display-text');
let equation = JSON.parse(localStorage.getItem('equation')) || '0';
displayCalculation();

function updateCalculation(value){
    equation += value ;
    console.log(equation);
    displayCalculation();
    localStorage.setItem('equation', JSON.stringify(equation));
}
function displayCalculation(){
    displayText.innerHTML = equation;
}