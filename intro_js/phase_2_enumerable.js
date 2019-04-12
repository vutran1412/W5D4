Array.prototype.myEach = function(callBack) {
  let i = 0
  while (i < this.length) {
    callBack(this[i]);
    i++;
  };
  return undefined;
};
// arr = [1, 2, 3, 4];

// console.log(arr.myEach((ele) => console.log(ele * 2)))

Array.prototype.myMap = function(callBack) {
  let newArr = []
  this.myEach(ele => {
    newArr.push(callBack(ele));
  });
  return newArr 
}
let divideThree = (ele) => {
  return ele / 3;
};
// console.log(arr2.myMap(divideThree))

let timesTwo = (ele) => {
  // console.log("I'm inside my baby ", ele)
  return ele * 2;
};


arr2 = [3, 6, 9, 12];

Array.prototype.myReduce = function(callBack, initialValue) {
  let acc;
  let thisCopy = this;
  if (initialValue) {
    acc = initialValue;
  } else {
    acc = this[0];
    thisCopy = thisCopy.slice(1);
  };
  thisCopy.myEach(ele => {
    acc = callBack(acc, ele);
  });
  return acc;
};

let add = (acc, ele) => acc + ele;
// console.log(arr2.myReduce((acc, ele) => acc + ele, 6));
console.log(arr2.myReduce(add, 6));
