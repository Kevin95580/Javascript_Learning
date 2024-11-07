let score = 33;
let score1 = "33"

console.log(typeof score);
console.log(typeof(score));

console.log("---------------------");
console.log(typeof score1);
console.log(typeof(score1));

console.log("---------------------");
console.log("After conversion")
//conversion of string into number

let convertedScoreIntoNumber = Number(score1);
console.log(typeof(convertedScoreIntoNumber));


//-------------------------------------------------(keep in mind)
// let subjectCode = "2101CS501"
// let convertedSubjectCodeIntoNumber = Number(subjectCode);
// console.log(typeof convertedSubjectCodeIntoNumber);
// console.log(convertedSubjectCodeIntoNumber) //==Nan= Not a number -> type number 

//if there was a null value it converted into 0
//undefined then NaN
//boolean value true = 1 / false = 0
//Number(stringValue) = NaN


console.log("---------------------");
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

//1 = true / 0=false 
//""=empty string => false
//"aaa" = filled string => true

console.log("---------------------");
let rollNo = 113;
let stringRollNo = String(rollNo);
console.log(stringRollNo);
console.log(typeof stringRollNo);

// ********** Operations **********

let str1 = "Hello ";
let str2 = "world";
let str3 = str1 + str2;
console.log(str3);


console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2") ;//32
//may be output taken from first argu
console.log(+true);


