//TODO Generic Class pada Typescript

class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  };

  add(element: T): void {
    this.data.push(element);
  };

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  };

  getAll(): T[] {
    return this.data;
  };
};

// let numbers = new List<number>(1, 2, 3, 4, 5, 6);
// numbers.add(1); // hanya boleh 1 argumen
// numbers.addMultiple(2, 13, 12, 31, 413, 41, 4); // bisa banyak Argumen
// console.log(numbers.getAll());

//* Kita bisa membuat Class ini lebih Generic lagi dengan menggunakan Data Type <any>.

let numbers = new List<any>();

numbers.addMultiple("Richard Laurent", 173112706450179, true, "Lulus");
numbers.addMultiple("Giovandy H. Nainggolan", 173112706450004, true, "Lulus");

console.log(numbers.getAll());

