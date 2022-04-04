"use strict";
//TODO Class pada Typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    //* name harus di definisikan terlebih dahulu pada Constructor agar Typescript tidak error
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
let user = new User("Richard Laurent", 22);
console.log(user.name, user.age);
