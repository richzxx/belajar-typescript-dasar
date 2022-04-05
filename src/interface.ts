//* Interface pada Typescript

interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log("Asus Booting Complete");
  }
  off(): void {
    console.log("Shutdown Successful");
  }
}

class Macbook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log("Macbook booting Complete");
  }
  off(): void {
    console.log("Shutdown Successful!");
  }
}

let laptopAsus = new Asus("Asus TUF Gaming", true);
let laptopMacbook = new Macbook("Macbook M1", true);

console.log(
  laptopAsus,
  laptopMacbook
);