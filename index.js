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
      }else if(display === 3){
        thirdArr.push(num);
        currentNumber = -Number(thirdArr.join(''));
        displayEL.value = currentNumber;
    } else{
      displayEL.value = previousNumber;
    };
  }
    function getOperator(op){
      display = 2;
      operator = op;
      displayEL.value += operator;
    }
  function equalBtn(){
     if (operator === '+'){
       result = previousNumber + currentNumber
     }else if (operator === '-'){
       result = previousNumber - currentNumber
     }else if (operator === '*'){
       result =  previousNumber * currentNumber
     }else if (operator === '/'){
       result =  previousNumber / currentNumber
     }
        displayEL.value = result;
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
  

