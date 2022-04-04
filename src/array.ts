// Array Typescript

//* Array yang isinya wajib Number
let array1: number[];
array1 = [1, 2, 3]; 

//* Array yang isinya wajib String
let array2: string[];
array2 = ["string1", "string2", "string3"];

let array3: any[];
array3 = [1, "string", true, {
  nama: "Richard",
  npm: 173112706450179,
  isActive: true,
  isGraduate: true,
  isGraduateCeremony: false
}];

// Tupples
//todo Pasangan dari 2 Tipe Data yang berbeda

let biodata: [string, number];
biodata = ["Surabaya", 123];

console.log(array1, array2, array3);

console.log(biodata);
