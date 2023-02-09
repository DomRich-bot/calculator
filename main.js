let operator = '';
let currentValue = '';
let previousValue = '';
let mainScreen = document.querySelector(".main");
let previousScreen = document.querySelector(".previous");

document.addEventListener('DOMContentLoaded', function() {
    let equals = document.querySelectorAll(".equals")
    let numbers = document.querySelectorAll(".btn-num");
    let operators = document.querySelectorAll(".btn-op");

    numbers.forEach((number) => number.addEventListener('click', function(e){
        storeValue(e.target.value);
        mainScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener('click', function(e) {
        storeOp(e.target.value);
        previousScreen.textContent = previousValue + " " + operator;
    }));
});

function storeOp(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
};

function storeValue(num) {
    if(currentValue.length <= 10){
        currentValue += num;
    };
};

function toNegative(num) {
    currentValue = (num * (-1));
    mainScreen.textContent = currentValue;
};

function add(a,b) {
    if (((a + b).toString()).length > 10) {
        currentValue = (parseInt(a) + parseInt(b)).toExponential(3);
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
    else {
        currentValue = parseInt(a) + parseInt(b);
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
};

function subtract(a,b) {
    if (((a - b).toString()).length > 10) {
        currentValue = (a - b).toExponential(3);
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
    else {
        currentValue = a - b;
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
};

function multiply(a,b) {
    if (((a * b).toString()).length > 10) {
        currentValue = (a * b).toExponential(3);
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
    else {
        currentValue = (a * b);
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
};

function divide(a,b) {
    if(b == 0) {
        currentValue = 'UH UH UH'
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
    else if(((a / b).toString()).length > 10 && (a/b > 999999999)){
        currentValue = (a / b).toExponential(3);
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
    else if(((a / b).toString()).length > 10 && (a/b < 999999999)){
        currentValue = roundNumber(a / b);
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
    else {
        currentValue = a / b;
        mainScreen.textContent = currentValue;
        previousScreen.textContent = ""
    }
};

function operate(a, operator, b) {
    if (operator == '+') {
        return add(a,b);
    } else if (operator == '-') {
        return subtract(a,b);
    } else if (operator == '*') {
        return multiply(a,b);
    } else if(operator == '/') {
        return divide(a,b);
    }
};

function roundNumber(num) {
    return Math.round(num * 100000) / 100000
}

function erase() {
    mainScreen.innerText = '';
    previousScreen.innerText = '';
    currentValue = '';
    previousValue = '';
    operator = '';
};

