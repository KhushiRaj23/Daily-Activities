document.addEventListener("DOMContentLoaded", function() {
  const result = document.getElementById('result');
  const buttons = document.querySelectorAll('button');
  let currentInput = '';
  let firstOperand = '';
  let operator = '';

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const value = button.textContent;
          if (!isNaN(value) || value === '0') {
              currentInput += value;
              result.value = currentInput;
          } else if (value === 'C') {
              clear();
          } else if (value === '=') {
              calculate();
          } else {
              handleOperator(value);
          }
      });
  });

  function clear() {
      currentInput = '';
      firstOperand = '';
      operator = '';
      result.value = '';
  }

  function handleOperator(op) {
      if (operator === '') {
          firstOperand = currentInput;
          currentInput = '';
          operator = op;
      } else {
          calculate();
          operator = op;
      }
  }

  function calculate() {
      if (currentInput !== '') {
          let secondOperand = currentInput;
          let resultValue;
          switch (operator) {
              case '+':
                  resultValue = add(parseFloat(firstOperand), parseFloat(secondOperand));
                  break;
              case '-':
                  resultValue = subtract(parseFloat(firstOperand), parseFloat(secondOperand));
                  break;
              case '*':
                  resultValue = multiply(parseFloat(firstOperand), parseFloat(secondOperand));
                  break;
              case '/':
                  if (secondOperand === '0') {
                      resultValue = 'Error';
                  } else {
                      resultValue = divide(parseFloat(firstOperand), parseFloat(secondOperand));
                  }
                  break;
              default:
                  resultValue = 'Error';
          }
          result.value = resultValue;
          currentInput = '';
          firstOperand = resultValue;
          operator = '';
      }
  }

  function add(a, b) {
      return a + b;
  }

  function subtract(a, b) {
      return a - b;
  }

  function multiply(a, b) {
      return a * b;
  }

  function divide(a, b) {
      return a / b;
  }
});
