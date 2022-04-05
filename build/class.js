"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//TODO Class pada Typescript
class User {
    //* name harus di definisikan terlebih dahulu pada Constructor agar Typescript tidak error
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
//* Public = bisa diakses disemua class / luar class
//* Protected = hanya bisa diakses dari class tersebut / class turunnya
//* Private = hanya bisa diakses di class itu sendiri
//* Static = Bisa diakses di class itu sendiri, tanpa harus dimasukkan ke Constructor
// let user = new User("Richard Laurent", 22);
// console.log(user.name, user.age);
//TODO Inheritance Typescript
class Admin extends User {
    //* Super Constructor dengan syntax super()
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    //* Setter = berfungsi untuk memvalidasi Value (biasanya) 
    set email(value) {
        if (value.length < 5) {
            this._email = "Email tidak Valid";
        }
        else {
            this._email = value;
        }
    }
    ;
    //* Getter = berfungsi untuk mengambil data (return data) dari Setter 
    get email() {
        return this._email;
    }
    ;
}
Admin.getRoleName = "Admin"; //Static nempel dengan Class Adminnya langsung
// let admin = new Admin("081210835622", "Richard Laurent", 22);
// console.log(
//   admin.getName(),
//   admin.getRole(),
//   admin.phone
// );
// admin.email = "ronaldorichard27@gmail.com";
let admin = Admin.getRoleName;
console.log(admin);
