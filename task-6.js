const { calculateTriangleSquare } = require('./task-3');

const calculateSpace = (type, room_parameters) => {
  const { a, b, c, r } = room_parameters;
  let result;
  switch (type) {
    case 'треугольник':
      result = calculateTriangleSquare(a, b, c);
      break;
    case 'прямоугольник':
      result = a * b;
      break;
    case 'круг':
      result = 3.14 * (r ** 2);
  }
  console.log(result);
};

calculateSpace('прямоугольник', {a: 4, b: 10});
calculateSpace('круг', {r: 5});
calculateSpace('треугольник', {a: 3, b: 4, c: 5});
