const analyzeSleep = (X, Y, Z) => {
  let result;
  if (Z < X) {
    result = 'Недосып';
  } else if (Z > Y) {
    result = 'Пересып';
  } else {
    result = 'Это нормально';
  }

  console.log(result);
};

analyzeSleep(6, 10, 8);
analyzeSleep(7, 9, 10);
analyzeSleep(7, 9, 2);
