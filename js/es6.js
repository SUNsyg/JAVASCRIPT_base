function Foo() {
  var stage = []
  setInterval(() => {
    debugger
    this.data = {
      name: 'wqhwjisqjwo',
      hobby: {
        phone: '11'
      },
    }
    stage.push(this.data)
  })
}
// const foo = new Foo();


function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'TJH';
  let age = 24;
}

for (var i=0;i<3;i++){
  setTimeout(() => console.log(i), 1);
}

for (let i=0;i<3;i++) {
  setTimeout(() => console.log(i), 1);
}


const a = {}
const b = { key: "b" }
const c = { key: "c" }
a[b] = 123
a[c] = 456
console.log(a[b])

//  测试
//  A C
//  B  D
//  C  C
//  A  C
//  没看明白   B
//  没想到  C
//  C, 错误   C
//  对象与函数的调用，面向对象的思想？   C
//  面向对象，A   C
//  C  D
//   D
