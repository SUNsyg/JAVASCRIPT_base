function curry(fn) {
  return function() {
    // 备份实参
    var args = arguments;
    return function() {
      return fn(...args, ...arguments)
    }
  }
}

function fun(a,b,c,d){
  return a + b + c + d
}
// 柯理化
fun = curry(fun);

var fn = fun(1,2);
console.log(fn(4,5));
