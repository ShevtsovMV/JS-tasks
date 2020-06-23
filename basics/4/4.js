const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => num % 2 == 0;
function filterArray(someArray, filter) {
  let newArray = someArray;
  let i = 0;
  while (i < newArray.length) {
    if (filter(newArray[i])) {
      i++
    } else {
      newArray.splice(i, 1);
    }
  }
  return newArray
}
console.log(filterArray(mixedArray, isEven));