const name = "Darshan"
const repoCount = 10

// console.log("My Name is "+name+"and repocount is "+repoCount);
// console.log(`My name is ${name} and repo count is ${repoCount}`);

const movieName = new String("Avengers-Infinity-War");
console.log(movieName[0]);

// console.log(movieName.__proto__); => see in google for better view of prototype

// console.log("Length => "+movieName.length)
// console.log(movieName.toUpperCase());
// console.log(`charcter at 5th position => `+movieName.charAt(5));
//console.log(movieName.indexOf('t));

const newString = movieName.substring(0,4);//last index is not included
console.log(newString);

// const newString2 = movieName.slice(-8,4);
// console.log(newString2);

// const newString3 = movieName.trim()---for remove extra spaces 


// const url = "https://darshan.ac.in/ayush20%patel"
// console.log(url.replace('20%','-'));

// console.log(url.includes('ayush'));

console.log(movieName.split('-'));

