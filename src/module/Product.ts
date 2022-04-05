import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);
asus.pressA();
asus.pressB();

let macbook = new Macbook(2017, false, false);
console.log(macbook);
asus.pressA();
asus.pressB();
