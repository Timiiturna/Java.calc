const displayEL = document.getElementById("mastyles-display");
let display = 0;
let operator = '';
let result = '';
let previousNumber = '';
let currentNumber = '';
let hasSolve = false;
let firstArr = [];
let secondArr = [];
console.log(firstArr)
console.log(secondArr)
    function getNumber(num){
      if (display === 0 || display === 1){
        firstArr.push(num);
        display = 1;
        previousNumber = Number(firstArr.join(''));
        displayEL.value = previousNumber
      }else if(display === 2){
        secondArr.push(num);
        currentNumber = Number(secondArr.join(''));
        displayEL.value = currentNumber
      }
    }
    function getOperator(op){
      display = 2;
      operator = op;
      displayEL.value += operator
    }
  function equalBtn(){
     if (operator === '+'){
       result = previousNumber + currentNumber
       displayEL.value = result;
     }else if (operator === '-'){
       result = previousNumber - currentNumber
       displayEL.value = result;
     }else if (operator === '*'){
       result =  previousNumber * currentNumber
       displayEL.value = result;
     }else if (operator === '/'){
       result =  previousNumber / currentNumber
       displayEL.value = result;
     }
   } 
  function Acbtn(){
    displayEL.value = ''
    display = 0;
    previousNumber = null
    currentNumber = null
    firstArr = []
    secondArr = []
    operator = ''
    result = 0
  }
  

