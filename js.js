"use strict";
/* 
ЗАДАЧА:
1.Создайте функцию конструктор которая будет представлять автомобиль. В функции конструктор создайте 2 свойства для автомобиля - марка и скорость в км\ч
2.Создайте метод ускорения который будет увеличивать скорость автомобиля на 10 км\ч и выводить новую, общую скорость в консоль.
3.Создайте метод торможения, который будет уменьшать скорость автомобиля на 5 км\ч и выводить общую скорость в консоль.
4.Создайте 2 объекта автомобиля из функции конструктора и используйте методы, который вы создали в функции конструкторе.
ДАННЫЕ:
Авто№1 - "Lada", скорость 170км\ч
Авто№2 - "Skoda", скорость 105км\ч

*/

function Car(mark, speed){
    this.mark = mark
    this.speed = speed
}

Car.prototype.calcSpeedUp = function() {
    this.speed += 10
    console.log(`${this.mark} едет со скоростью - ${this.speed} kmh`)
}
Car.prototype.calcSpeedDown = function() {
    this.speed -= 5
    console.log(`${this.mark} едет со скоростью - ${this.speed} kmh`)
}

const lada = new Car('Lada', 170)

/// классы  


class User1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    get biearthYear(){
        return new Date().getFullYear() - this.age
    }
}

const anna = new User1('Anna', 'Andreeva', 32)
console.log(anna)

// getters

const user = {
    firstName: 'Dima',
    lastName: 'Zarubov',
    age: 30,
    get birthYear() {
        return new Date().getFullYear() - this.age
    }
}

console.log(user)