let range = (start, end) => {
  // let rangeArr = range(start+1, end)[0];

  if(start >= end) {
    return [start];
  } 
  let rangeArr = range(start + 1, end)
  rangeArr.unshift(start)
 
  return rangeArr;
}

let sum = (arr) => {

  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1))
}

console.log(sum([1, 2, 3, 4, 5]))
console.log(range(7, 2))