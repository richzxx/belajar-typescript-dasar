import Laptop from "./BaseLaptop";

class Macbook<T> extends Laptop<T> {

  //TODO Penjelasan ada di Asus.ts 
  // Semua penjelasan tertera di Class Asus

  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super("Macbook", type, numeric, touchButton)
  }
}

export default Macbook;