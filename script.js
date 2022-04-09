'use strict';

// Select the HTML elements
const calcDisplay = document.querySelector('.calc-display-text-value');

const clearBtn = document.querySelector('.calc-button-clear');
const backspaceBtn = document.querySelector('.calc-button-backspace');

const divideBtn = document.querySelector('.calc-button-divide');
const subBtn = document.querySelector('.calc-button-subtract');
const addBtn = document.querySelector('.calc-button-add');
const multiplyBtn = document.querySelector('.calc-button-multiply');
const equalBtn = document.querySelector('.calc-button-equal');

const numBtn = document.querySelectorAll('.calc-num');

//
let operator = '';
let num1 = 0;
let num2 = 0;

//
const doCalc = function (operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Error';
  }
};

//
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num1, num2) {
  return num1 + num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

// Number buttons
numBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    calcDisplay.innerHTML += btn.textContent;
  });
});

// Calcul buttons
multiplyBtn.addEventListener('click', function () {
  num1 = parseFloat(calcDisplay.innerHTML);
  operator = '*';
  calcDisplay.textContent += operator;
});

addBtn.addEventListener('click', function () {
  num1 = parseFloat(calcDisplay.innerHTML);
  operator = '+';
  calcDisplay.textContent += operator;
});

subBtn.addEventListener('click', function () {
  num1 = parseFloat(calcDisplay.innerHTML);
  operator = '-';
  calcDisplay.textContent += operator;
});

divideBtn.addEventListener('click', function () {
  num1 = parseFloat(calcDisplay.innerHTML);
  operator = '/';
  calcDisplay.textContent += operator;
});

// Clear button
clearBtn.addEventListener('click', function () {
  calcDisplay.textContent = 0;
});

// Backspace button
backspaceBtn.addEventListener('click', function () {
  calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
});

// Equal button
equalBtn.addEventListener('click', function () {
  num2 = parseFloat(calcDisplay.textContent);
  calcDisplay.textContent = doCalc(operator, num1, num2);
});
