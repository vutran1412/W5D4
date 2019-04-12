// let oldArray = [1, 2, -1, 1, -2, 2, -3, 3, 4, -4, 5]

// Array.prototype.unique = (arr) => {
//   let newArr = [];
//   arr.forEach(element => {
//     if (!newArr.includes(element)) {
//       newArr.push(element);
//     };
//   });
//   return newArr;
// };

// Array.prototype.twoSum = (arr) => {
//   let pairs = [];
//   arr.forEach((ele1, i) => {
//     arr.forEach((ele2, i2) => {
//       if (ele1 + ele2 === 0 && i2 > i) {
//         pairs.push([i, i2]);
//       };
//     });
//   });
//   return pairs
// };

// let twoDimmensionalArr = [
//   [1, 2, 3], 
//   [5, 8, 9], 
//   [3, 4, 12]
// ]

// Array.prototype.transpose = (arr) => {
//   let transposedArray = []
//   arr.forEach((row, i) => {
//     let transposedRow = []
//     row.forEach((col, i2) => {
//       newArr = arr[i2][i]
//       transposedRow.push(newArr)
//     });
//     transposedArray.push(transposedRow)
//   });
//   return transposedArray
// };

// console.log(Array.prototype.unique(oldArray));
// console.log(Array.prototype.twoSum(oldArray));
// console.log(Array.prototype.transpose(twoDimmensionalArr));


