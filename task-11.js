// 1
console.log('#1');
const changeRectangle = (rectangle, newSquare) => {
  if (newSquare >= 0) {
    rectangle.a = newSquare / rectangle.b;
  }
};

const testRectangle = {a: 10, b: 15};
console.log('BEFORE', testRectangle);
changeRectangle(testRectangle, 300);
console.log('AFTER', testRectangle);
changeRectangle(testRectangle, 0);
console.log('AFTER', testRectangle);


// 2
console.log('#2');
const increaseArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }
};

const testArray = [1, 2, 3];
console.log('BEFORE', testArray);
increaseArray(testArray);
console.log('AFTER', testArray);
increaseArray(testArray);
console.log('AFTER', testArray);
