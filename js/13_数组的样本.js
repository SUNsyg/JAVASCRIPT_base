function fn(n) {
  var _arr = [];
  while(_arr.length != n){
    var m = parseInt(Math.random() * 31) + 2
    if (!_arr.includes(m)) {
      _arr.push(m);
    }
  }
  return _arr;
}
console.log(fn(11));
