//1
console.log('#1');
const getChangedRectangle = (rectangle, k) => {
  return {
    a: rectangle.a * k,
    b: rectangle.b * k
  };
};

const testRectangle = {a: 10, b: 15};
console.log('BEFORE', testRectangle);
const newRectangle = getChangedRectangle(testRectangle, 2);
console.log('AFTER', testRectangle);
console.log('AFTER', newRectangle);

//2
console.log('#2');
const castArray = (array) => {
  // way 1
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(array[i].toString())
  }
  return resultArray;

  // way 2
  // const resultArray = [];
  // array.forEach(i => resultArray.push(i.toString()));
  // return resultArray

  // way 3 (perfectly)
  // return array.map(i => i.toString());
};


const testArray = [4, 8, 15, 16, 23, 42];
console.log('BEFORE', testArray);
const newArray = castArray(testArray);
console.log('AFTER', testArray);
console.log('AFTER', newArray);
