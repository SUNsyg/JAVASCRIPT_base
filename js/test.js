function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    2 * Math.PI * this.radius
  }
};

console.log(shape.diameter());

console.log(shape.perimeter());

function addToList(item, list) {
  return list.push(item);
}

const result = addToList('apple', ['banana'])
console.log(result)

const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound'
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);

