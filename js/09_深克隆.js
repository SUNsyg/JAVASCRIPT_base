function deepClone(o) {
  if (
      typeof o == "string"
      ||
      typeof o == 'number'
      ||
      typeof o == 'boolean'
      ||
      typeof o == 'undefined'
  ) {
    return o;
  } else if (Array.isArray(o)) {
    var _arr=[];
    for (let i=0;i<o.length;i++) {
      _arr.push(deepClone(o[i]));
    }
  } else if (typeof o == "object") {
    var _o = {}
    for (var k in o) {
      _o[k]=deepClone(o[k]);
    }
    return _o;
  }
}
var arr = [1,2,3,4,[66,77,88]];
var arr2 = deepClone(arr2)
console.log(arr2)
console.log(arr2[4] == arr[4]) // false
