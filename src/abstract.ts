abstract class Vehicle {
  
  abstract wheels: number;

  start(): void {
    console.log("Brummm!");
  };

}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motor extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
car.start();
console.log(car.wheels);

let motor = new Motor();
motor.start();
console.log(motor.wheels);