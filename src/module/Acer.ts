import Laptop from "./BaseLaptop";

class Acer<T> extends Laptop<T> {

  // Type nya bebas karena Generic, tergantung nilai pertama yang di Input ke dalam Argumen.
  //TODO Jika, num maka Typenya akan otomatis menjadi number dan jika Str maka Typenya akan otomatis menjadi String
  
  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super("Acer", type, numeric, touchButton)
  }
}

export default Acer;