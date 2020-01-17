// function checkIsString(o) {
//   return Object.prototype.toString.call(o) == "[object String]"
// }
// function checkIsArray(o) {
//   return Object.prototype.toString.call(o) == "[object String]"
// }

// 偏函数预定了一些功能的，能够产生一个特定功能函数的高阶函数。
// function checkType(type) {
//   return function (o) {
//     return Object.prototype.toString.call(o) == "[object " + type + "]"
//   }
// }
//
// const checkIsArray = checkType("Array");
// console.log(checkIsArray([1,2,3]));


function fun(a) {
  return function(b){
    return a + b
  }
}
var fn = fun(3)
console.log(fn(6))
