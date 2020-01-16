var arr = [0,[1,2,3],[4,[[[5,6],7],8],9],10]

function flattenArray(arr) {
  var _arr = [];
  // 每一项进行遍历，看看是常数还是数组
  for (let i = 0; i< arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      _arr.push(arr[i]);
    } else {
      // 如果这一项是一个数组，那么重复这次的遍历模式
      _arr = _arr.concat(flattenArray(arr[i]))
    }
  }
  return _arr;
}
console.log(flattenArray(arr))
