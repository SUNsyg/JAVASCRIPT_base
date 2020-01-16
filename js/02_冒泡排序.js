// 冒泡排序
function bubbleSort(arr) {
  // 浅克隆
  var _arr = [].concat(arr);
  for (let i = 0;i <= _arr.length - 1; i++) {
    for (let j = 0; j < _arr.length - 1 - i; j++) {
      if (_arr[j] > _arr[j + 1]) {
        // 交换数组的位置，需要引入第三方变量做周转
        var temp = _arr[j]
        _arr[j] = _arr[j + 1];
        _arr[j + 1] = temp
      }
    }
  }
  return _arr;
}

var arr = [43,65,21,34,100,14,346,12];
// 现在这个函数是纯函数，是pure的，不会改变传入到它内部的参数的值
var result = bubbleSort(arr);
console.log(result);
