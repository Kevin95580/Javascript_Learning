const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);


// let anotherDate = new Date(2023,12,31);
//in js months start with 0
// let anotherDate = new Date(2023,0,31);
// let anotherDate = new Date("2023-01-31");
let anotherDate = new Date("01-31-2023");
//mm-dd-yyyy
console.log(anotherDate.toDateString());
console.log(anotherDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(anotherDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1)//because mothns array so it starts with 0
console.log(newDate.getMonth())





