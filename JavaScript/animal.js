function makeSound(animal) {
    animal.sound();
}
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.sound = function () {
        console.log('喵喵喵~');
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.sound = function () {
        console.log('汪汪汪~');
    };
    return Dog;
}());
makeSound(new Cat());
makeSound(new Dog());
