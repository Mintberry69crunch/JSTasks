const calculateTrianglePerimeter = (a, b, c) => {
  return [a, b, c].reduce((result, currentValue) => result + currentValue);
};

const calculateTriangleSquare = (a, b, c) => {
  const p = calculateTrianglePerimeter(a, b, c) / 2;
  return [p, p - a, p - b, p - c].reduce(
    (result, currentValue) => result * currentValue
  ) ** 0.5
};

console.log(calculateTriangleSquare(3, 4, 5));

exports.calculateTriangleSquare = calculateTriangleSquare;
