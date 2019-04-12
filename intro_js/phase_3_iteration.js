Array.prototype.bubbleSort = function() {
  let sorted = false;
  let sortedArr = this;

  while (!sorted) {
    sorted = true;

    sortedArr.forEach((el, i) => {
      if (sortedArr[i] > sortedArr[i + 1]) {
        [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]]
        sorted = false;
      };
    });
  };
  return sortedArr;
} 

// console.log([9,4,1,5,7,4].bubbleSort());

String.prototype.subStrings = function() {
  let subStr = [];
  let sub;

  for (var i = 0; i <= this.length; i++){
    for (var j = 0; j <= this.length; j++) {
      sub = this.slice(i, j);
      if (sub.length > 0) {
        subStr.push(sub);
      };
    };
  };
  return subStr;
};

console.log('cats'.subStrings())