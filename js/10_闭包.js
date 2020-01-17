// function fun() {
//   var a = 10;
//   return function() {
//     console.log(a)
//   }
// }
//
// var a = 20;
// var fn = fun()
// fn()

var a = 10;
function fun (){
  console.log(a)
}

(function(fn){
  var a = 20;
  fn()
})(fun);
