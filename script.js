
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;
let NumeroP = 0

function calculate() {
  switch(operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = result
  }
  return result;
}


const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");



let calculationResult = 0;


buttons.forEach((button) => {
  button.addEventListener("click", () => {
   
    const value = button.innerText;

   
    if(value === "C") {
        NumeroP = 0;
      num2 = 0;
      operator = "";
      calculationResult = 0;
      display.innerText = 0;
    } else if(value === "+" || value === "-" || value === "*" || value === "/") {
     
      NumeroP = parseFloat(display.innerText);
      operator = value;
      display.innerText = 0;
    } else if(value === "=") {
      
      num1 = NumeroP;
      num2 = parseFloat(display.innerText);
      calculationResult = calculate();
      display.innerText = calculationResult;

      NumeroP = 0;
      num2 = 0;
      operator = "";
      
    } else {
      
      if(display.innerText === "0") {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }
  });
});

