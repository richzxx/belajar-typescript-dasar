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
// let user = new User("Richard Laurent", 22);
// console.log(user.name, user.age);
//TODO Inheritance Typescript
class Admin extends User {
    //* Super Constructor dengan syntax super()
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
}
let admin = new Admin("081210835622", "Richard Laurent", 22);
console.log(admin.getName(), admin.getRole(), admin.phone);
