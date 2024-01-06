const displayEL = document.getElementById("mastyles-display")
const buttonEL = document.querySelector(".mastyles-button")
let display = 0
const operator = ''
let result = ''
const previousNumber = ''
const currentNumber = ''
let hasSolve = false
let hasCalculate = false;
buttonEL.addEventListener('click', function(){

});
  function btn0(){
    display = 0;
    displayEL.textContent += display;
  };
  function btn1(){
    display = 1;
    displayEL.textContent += display;
  };
  function btn2(){
    display = 2;
    displayEL.textContent += display;
  };
  function btn3(){
     display = 3;
    displayEL.textContent += display;
  };
  function btn4(){
     display = 4;
    displayEL.textContent += display;
  };
  function btn5(){
     display = 5;
    displayEL.textContent += display;
  };
  function btn6(){
     display = 6;
    displayEL.textContent += display;
  };
  function btn7(){
    display = 7;
    displayEL.textContent += display; 
  };
  function btn8(){
    display = 8;
    displayEL.textContent += display;
  };
  function btn9(){
    display = 9;
    displayEL.textContent += display; 
  };
  function addBtn(){
    display = '+';
    displayEL.textContent += display;
  };
  function subtractbtn(){
    display = '-';
    displayEL.textContent += display;
  };
  function multiplybtn(){
    display = '*';
    displayEL.textContent += display;
  };
  function divideBtn(){
    display = '/';
    displayEL.textContent += display;
  };
  function percentBtn(){
    display = '%'
    displayEL.textContent += display;
  };
  function plusMinusBtn(){
    display = '+/-';
    displayEL.textContent += display;
  };
  function pointBtn(){
   display = '.';
    displayEL.textContent += display;
  };
  function equalBtn(){
     if (hasSolve === true && hasCalculate === true){
     if (operator === '+'){
       result = previousNumber + currentNumber
     }else if (operator === '-'){
       result = previousNumber - currentNumber
     }else if (operator === '*'){
       result =  previousNumber * currentNumber
     }else if (operator === '/'){
       result =  previousNumber / currentNumber
     }
     return result
   }
   if (previousNumber + currentNumber){
     return previousNumber + currentNumber
   }else if (previousNumber - currentNumber){
     return previousNumber - currentNumber
   }else if (previousNumber * currentNumber){
     return previousNumber * currentNumber
   }else if (previousNumber / currentNumber){
     return previousNumber / currentNumber
   }
    displayEL.textContent = `${previousNumber} ${operator} ${currentNumber} = ${result}`
    return result
  };
  function Acbtn(){
     display = ' ';
    displayEL.textContent = ' '
  }
  

