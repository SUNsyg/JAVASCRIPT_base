interface Animal {
    sound(): void
}

function makeSound(animal: Animal) {
    animal.sound()
}
class Cat implements Animal {
    sound(): void {
        console.log('喵喵喵~')
    }
}
class Dog implements Animal {
    sound(): void {
        console.log('汪汪汪~')
    }
}
makeSound(new Cat())
makeSound(new Dog())
