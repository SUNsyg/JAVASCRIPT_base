const arr = [1,1,1,'1',1,3,2,2,2,2,2,2];

// // Set 是es6新增的数据结构，说白了就是不能有重复项的数组。
// const set = new Set(arr);
// // ...是Es6的强制解构的运算符
// console.log([...set])

function uniq(arr) {
  var _result = [];
  for (var i = 0;i<arr.length;i++) {
    if (!_result.includes(arr[i])){ // includes内部判断是===
      _result.push(arr[i])
    }
  }
  return _result
}
console.log(uniq(arr))

