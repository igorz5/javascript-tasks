const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = (num) => {
  return num % 2 === 0;
};

function filterArray(array, func) {
  return array.filter(func);
}

console.log(filterArray(mixedArray, isEven)); // 74, 14, 66, 22, 4
