import Asus from "./Asus";
import Macbook from "./Macbook";
import Acer from "./Acer";

let asus = new Asus("Zenbook", true, true);
console.log(asus);
// asus.pressA();
// asus.pressB();

let macbook = new Macbook(2017, false, false);
console.log(macbook);

let acer = new Acer("Nitro 5", false, false);
console.log(acer);
