import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {

  // Class BaseLaptop dan ILaptop harus di definisikan sebagai Generic, tidak boleh kosong (tidak dijelaskan)

  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;
  
  constructor(
    name: string,
    type: T,
    numeric: boolean,
    touchbutton: boolean
  ) {
    this.name = name,
    this.type = type,
    this.withNumeric = numeric,
    this.withTouchButton = touchbutton  
  }

  pressA(): void {
    console.log(Keyboard.a());
  };

  pressB(): void {
    console.log(Keyboard.b());
  }
}

export default BaseLaptop;