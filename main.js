function add(a,b) {
    return a + b;
} 
//console.log(add(2,99));

function subtract(a,b) {
    return a - b;
}
//console.log(subtract(5,9));

function multiply(a,b) {
    return a * b;
}
//console.log(multiply(-2,99));

function divide(a,b) {
    if(b == 0) {
        return 'UH UH UH'
    }
    else {
        return a / b;
    }
}

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
}

console.log(operate(9,'+',9));
console.log(operate(9,'-',9));
console.log(operate(9,'*',9));
console.log(operate(9,'/',9));
