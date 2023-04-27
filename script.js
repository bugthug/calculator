let firstNum = 0;

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