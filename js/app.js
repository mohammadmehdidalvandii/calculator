let display = document.querySelector('.calculator_display')

let equation = '';

function clickNumber(number) {
    equation += number;
    updateDisplay();
}
function clickOperator(operator) {
    if (equation.slice(-1).match(/[+\-*/.]/)) return;
    equation += operator;
    updateDisplay();
}
function updateDisplay() {
    display.textContent = equation;
}
function clearDisplay() {
    equation = '';
    updateDisplay();
}

function clickResult() {
    try {
        equation = new Function('return ' + equation)();
    } catch (error) {
        equation = 'Error';
    }
    updateDisplay();
}

