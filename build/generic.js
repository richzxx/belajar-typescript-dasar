"use strict";
//TODO Generic Type pada Typescript
function getData(value) {
    return value;
}
;
console.log(getData("Richard Laurent").length);
console.log(getData(173112706450179).length); //* Data Type number tidak bisa diberi length
//* Function Generic
function myData(value) {
    return value;
}
;
//* Arrow Function Generic
const arrowFunc = (value) => {
    return value;
};
console.log(myData("Giovandy").length);
console.log(myData(173112706450089).toLocaleString());
