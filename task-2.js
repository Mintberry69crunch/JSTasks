const analyzeYear = (year) => {
  if (!(1900 <= year && year <= 3000)) {
    // way 1
    // throw Error('Функция должна корректно работать на числах 1900≤n≤3000.');

    // way 2
    console.log('Функция должна корректно работать на числах 1900≤n≤3000.');
    return;
  }

  // way 1
  // let result;
  // if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  //   result = 'Високосный';
  // } else {
  //   result = 'Обычный';
  // }

  // way 2
  const result = (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    ? 'Високосный'
    : 'Обычный';

  console.log(result);
};

analyzeYear(2100);
analyzeYear(2000);
analyzeYear(1800);
