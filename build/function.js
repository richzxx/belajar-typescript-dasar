"use strict";
//todo Belajar Function Typescript
function getName() {
    return "Function getName berhasil!";
}
function getNum() {
    return 123;
}
function voidFunc() {
    console.log("Ini adalah Void Function, Berhasil dijalankan!");
}
// voidFunc();
//TODO Belajar Multiply
// Jangan lupa Deklarasikan semua Variable dan Output dari Returnnya, itu peraturan Typescript
function multiply(val1, val2) {
    return val1 + val2;
}
const resultMultiply = multiply(10, 12);
const Add = (val1, val2) => {
    return val1 + val2;
};
// console.log(Add(10, 20));
//TODO Default Parameter (Typescript)
// Default Parameter untuk Argument yang tidak diisi
const fullName = (first, last = "Laurent") => {
    return first + " " + last;
};
// console.log(fullName("Richard", "Samosir"));
//TODO Optional Parameter
// Optional Parameter untuk Argument yang tidak diisi (Undifined)
const getScore = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getScore("A", "B"));
