const score = 100;
// console.log(score);

const balance = new Number(250);
// console.log(balance);

balance.toString();
// console.log(typeof balance);
// console.log(balance.length);
// console.log(balance.toFixed(2));

// console.log(balance.toPrecision(3)); => it priorites digits before decimal point

const number = 100000;
// console.log(number.toLocaleString()); //assings commas as per us standard
// console.log(number.toLocaleString('en-IN')); //assings commas as per ind standard


// ++++++++++++++ Maths +++++++++++++++

// console.log(Math); //run on google console for Math properties and functions 
// console.log(Math.abs(-4));
// console.log(Math.round(4.35));
// console.log(Math.ceil(4.35));
// console.log(Math.floor(4.35));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.max(1,2,3,4,5));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log((Math.random()*10) + 1);

const min = 1;
const max = 6;

console.log(Math.floor((Math.random() * (max-min + 1)+ min)));



