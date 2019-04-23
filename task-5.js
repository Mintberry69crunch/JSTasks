const checkZeroDivision = secondNumber => {
  let result = true;
  if (secondNumber === 0) {
    console.log('Деление на 0!');
    result = false;
  }
  return result;
};

const calculate = (firstNumber, secondNumber, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '/':
      if (checkZeroDivision(secondNumber)) {
        result = firstNumber / secondNumber;
      }
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case 'pow':
      result = firstNumber ** secondNumber;
      break;
    case 'mod':
      if (checkZeroDivision(secondNumber)) {
        result = firstNumber % secondNumber;
      }
      break;
    case 'div':
      if (checkZeroDivision(secondNumber)) {
        result = Math.floor(firstNumber / secondNumber);
      }
      break;
  }
  if (result !== undefined) {
    console.log(result);
  }
};

calculate(5.0, 0.0, 'mod');
calculate(-12.0, -8.0, '*');
calculate(5.0, 10.0, '/');
