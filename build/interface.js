"use strict";
//* Interface pada Typescript
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Asus Booting Complete");
    }
    off() {
        console.log("Shutdown Successful");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("Macbook booting Complete");
    }
    off() {
        console.log("Shutdown Successful!");
    }
}
let laptopAsus = new Asus("Asus TUF Gaming", true);
let laptopMacbook = new Macbook("Macbook M1", true);
console.log(laptopAsus, laptopMacbook);
