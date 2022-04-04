// String
let nama: string = "Richard Laurent";
nama = "Nama Baru";

// Boolean
let umur: number;
umur = 30;
umur = 13;

// Boolean
let isMarried: boolean;
isMarried = true;
isMarried = false;

// any
let heroes: any = "Iron Man";
heroes = 20;
heroes = [];
heroes = {};
heroes = true || false || "String";

// console.log(`String itu : ${nama}, Number itu : ${umur}, Any itu : ${heroes}`);

//TODO Union Type Typescript
// Mendeklarasikan Data Type yang berbeda pada 1 Variable

let phone: number | string;
phone = 6281210835622; // Ini Number
phone = "6281210835622"; // Ini String

console.log(phone);