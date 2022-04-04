//todo Belajar Function Typescript

function getName(): string {
  return "Function getName berhasil!";
}

function getNum(): number {
  return 123;
}

function voidFunc(): void {
  console.log("Ini adalah Void Function, Berhasil dijalankan!");
}

// voidFunc();

//TODO Belajar Multiply
// Jangan lupa Deklarasikan semua Variable dan Output dari Returnnya, itu peraturan Typescript
function multiply(val1: number, val2: number): number {
  return val1 + val2;
}

const resultMultiply = multiply(10, 12);
// console.log(resultMultiply);

// console.log(getName(), " ", getNum());

//TODO Function as DataType

type tambah = (val1: number, val2: number) => number;

const Add: tambah = (val1: number, val2: number): number => {
  return val1 + val2;
}

// console.log(Add(10, 20));

//TODO Default Parameter (Typescript)
// Default Parameter untuk Argument yang tidak diisi
const fullName = (first: string, last: string = "Laurent"): string => {
  return first + " " + last;
}

// console.log(fullName("Richard", "Samosir"));

//TODO Optional Parameter
// Optional Parameter untuk Argument yang tidak diisi (Undifined)

const getScore = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
}

console.log(getScore("A", "B"));