let displayValue = 0;
let operator = null;
let isDisappear = false;
let wasOperatorLastClicked = false;
calculatorState = {
    displayValue: 0,
    operator: null,
    firstValue: null
}

const convertToNumber = (n) => n*1
const displayElement = document.
    querySelector('.screen > h1');



function handleOperandClick() {
    console.log('before')
    if (wasOperatorLastClicked) {
        calculatorState.operator = this.textContent;
        return;
    };
    wasOperatorLastClicked = true;
    const currentOperand = this.textContent;
    console.table(calculatorState);
    calculatorState.displayValue = 1 * displayElement.textContent;
    triggerAppropriateResponse(currentOperand);
    console.log('after')
    console.table(calculatorState);
}

const operandElements = document.querySelectorAll('.operand');
operandElements.forEach((operand) =>
 operand.addEventListener('click',handleOperandClick)
 )

function onNumberButtonClicked(event) {
    wasOperatorLastClicked = false;
    const strNumberClicked = this.textContent;
    if (isDisappear) {
        setDisplayValue(strNumberClicked)
        isDisappear = false;
        return;
    }
    if (displayValue === 0) {
        setDisplayValue(strNumberClicked);
        return;
    };
    setDisplayValue(displayValue + strNumberClicked);
}

function setDisplayValue(value) {
    displayValue = value;
    displayElement.textContent = value;
    calculatorState.displayValue = value;
    displayValue = convertToNumber(displayValue);
}

function triggerAppropriateResponse(currentOperand) {
    if (calculatorState.operator === "=") {
        handleEqualOperation(currentOperand);
        return;
    }

    if (calculatorState.firstValue === null &&
         calculatorState.operator === null){
        firstStep(currentOperand);
        return;
    }
        
    if (calculatorState.operator !== null && 
        calculatorState.firstValue !== null){
        calculate(currentOperand);
        return;
    }
        
    if(calculatorState.operator === null){
        calculate(calculatorState);
        return;
    }
        throw new Error('calculatorState not accounted for reached');
}

function handleEqualOperation(currentOperand) {
    calculatorState.operator = currentOperand;
}

const clearButton = document.
    querySelector('#clear-button');

clearButton.addEventListener('click',clearEverything)

function clearEverything() {
    setDisplayValue(0);
    calculatorState = {
        displayValue: 0,
        operator: null,
        firstValue: null
    }
}

function firstStep(currentOperand) {
    calculatorState.firstValue = 1 * displayElement.textContent;
    calculatorState.operator = currentOperand;
    isDisappear = true;
    stepInChain = null
}

function calculate(currentOperand) {
    if (calculatorState.displayValue === 0
        && calculatorState.operator === "÷") {
        clearEverything();
        setDisplayValue("Can't divide by zero");
        calculatorState.displayValue = 0;
        isDisappear = true;
        return;
    }

    let result = Math.floor(100 *
        operate(calculatorState.firstValue, calculatorState.displayValue, calculatorState.operator)
        ) / 100;
    
    
    setDisplayValue(result);

    calculatorState.displayValue = 0;
    calculatorState.firstValue = result;
    calculatorState.operator = currentOperand;
    isDisappear = true;
    stepInChain = true;
}

const numberButtons = document.querySelectorAll('.number');


numberButtons.forEach(button => 
    button.addEventListener('click',onNumberButtonClicked));

function operate(num1, num2 , operator) {
    switch (operator) {
        case '+': return add(num1,num2);
        case '-': return subtract(num1, num2);
        case '÷': return divide(num1,num2);
        case 'X': return multiply(num1,num2);
        case '=': return calculatorState.firstValue;
        default: throw new Error("Invalid operator supplied");
    }
}

function add(num1, num2) {
    return num1*1+num2*1;
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