//TODO Class pada Typescript
export class User {

  //* name harus di definisikan terlebih dahulu pada Constructor agar Typescript tidak error

  constructor(public name: string, public age: number) {
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  }

}

//* Public = bisa diakses disemua class / luar class
//* Protected = hanya bisa diakses dari class tersebut / class turunnya
//* Private = hanya bisa diakses di class itu sendiri
//* Static = Bisa diakses di class itu sendiri, tanpa harus dimasukkan ke Constructor

// let user = new User("Richard Laurent", 22);
// console.log(user.name, user.age);

//TODO Inheritance Typescript

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;

  private _email: string = "";
  static getRoleName: string = "Admin"; //Static nempel dengan Class Adminnya langsung

  //* Super Constructor dengan syntax super()
  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write 
    };
  };

  //* Setter = berfungsi untuk memvalidasi Value (biasanya) 
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email tidak Valid";
    } else {
      this._email = value;
    }
  };

  //* Getter = berfungsi untuk mengambil data (return data) dari Setter 

  get email(): string {
    return this._email;
  };

}

// let admin = new Admin("081210835622", "Richard Laurent", 22);

// console.log(
//   admin.getName(),
//   admin.getRole(),
//   admin.phone
// );

// admin.email = "ronaldorichard27@gmail.com";

let admin = Admin.getRoleName;

console.log(admin);