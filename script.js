const operator = prompt('Enter operator (+, -, *, or /)');

const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(prompt("Enter the second number."));

let result = 0; //Declaration of variable.
if (isNaN(number1) || isNaN(number2)) {
    alert("input error!!! Enter a valid input");
} else {

    //use if, elseif and else keyword to define the calculator condition.

    if (operator == '+') { //use + (addition) operator to add two numbers

        result = number1 + number2;

    } else if (operator == '-') { //use - (subtraction) operator to subtract two numbers

        result = number1 - number2;

    } else if (operator == '*') { //use * (multiplication) operator to multiply two numbers

        result = number1 * number2;
    } else if (operator == '/') { //use / (division) operator to divide two numbers

        result = number1 / number2;
    }
}
document.write(number1 + operator + number2 + ' = ' + result);