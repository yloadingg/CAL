let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                alert("Division by zero is undefined");
                return;
            }
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = undefined;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
});
