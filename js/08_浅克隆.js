var arr = [1,2,3,4,[66,77,88]];

var _arr = [];

for (let i=0;i<arr.length;i++) {
  _arr.push(arr[i])
}

console.log(_arr == arr) // false
console.log(_arr[4] == arr[4]) // true
