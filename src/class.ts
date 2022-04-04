
//TODO Class pada Typescript

export class User {

  //* name harus di definisikan terlebih dahulu pada Constructor agar Typescript tidak error

  constructor(public name: string, public age: number) {
  }
}

let user = new User("Richard Laurent", 22);

console.log(user.name, user.age);