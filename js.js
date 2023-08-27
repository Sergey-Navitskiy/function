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
// задание с классами, гет и сет
class Car{
    constructor(mark, speed) {
      this.mark = mark;
      this.speed = speed;
    }
    get speed() {
      return this.speedUS * 1.6
    }
    set speed(speed) {
      this.speedUs = speed / 1.6 
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
    }
  
    break() {
      this.speed -= 5;
      console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
    }
  }
    

const lada = new Car('Lada', 170)

/// классы  


class User1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age
        this.biearthYear = this.biearthYear
    }
    get biearthYear(){
        return new Date().getFullYear() - this.age
    }
    set biearthYear(val){
        const year = '' + val
        if(year.length < 4){
            alert('Вы ввели меньше 4-х символов')
            return
        }
        this.age = new Date().getFullYear() - year
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

// class  Utuber {
//     constructor(fullName) {
//         this.firstNane
//         this.lastNane
//         this.fullNane = fullNane 
//     }
//     get fullName(){
//         return `${this.firstNane} ${this.lastNane}`
//     }
//     set fullNane(val){
//         if (val.length < 3) {
//             alert('Маленькое имя, нужно больше 3 символов')
//             return
//         }
//         const name = val.split(' ')
//         this.firstNane = name[0]
//         this.lastNane = name[1]
//     }
// }

// const hanna = new Utuber('Anna Fokeevna')
// console.log(hanna)

//статические методы

class Article {
    constructor(title, date){
        this.title = title
        this.date = date
    }
    static createTodays(){
        return new this('Some article', new Date())
    }
}