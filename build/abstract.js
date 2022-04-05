"use strict";
class Vehicle {
    start() {
        console.log("Brummm!");
    }
    ;
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
car.start();
console.log(car.wheels);
let motor = new Motor();
motor.start();
console.log(motor.wheels);
