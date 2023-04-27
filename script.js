let displayValue = 0;

function onNumberButtonClicked(event) {
    const strNumberClicked = this.textContent;
    if (firstNum === 0) return displayValue = strNumberClicked;
    displayValue = displayValue + strNumberClicked
    displayValue = convertToNumber(displayValue);
}

function convertToNumber(n) {
    return n*1
}

function operate(num1, num2 , operator) {
    switch (operator) {
        case '+': add(num1,num2);
        case '-': subtract(num1, num2);
        case '/': divide(num1,num2);
        case '*': multiply(num1,num2);
        default: throw new Error("Invalid operator supplied");
    }
}

function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}