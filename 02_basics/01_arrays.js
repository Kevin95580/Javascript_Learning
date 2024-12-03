const myArray = [1,2,3,4,'Darshan',5]

const movies = ["Ironman","Doctor Strange"]

const myArray2 = new Array(6,7,8,9)

//Array Methods


// myArray.push(6);//--Adds values at the end
// myArray.pop();//--remove the last element of the array
// myArray.unshift(0);//--addds the element  at the first position
// myArray.shift();//--remove the first element from the array

//console.log(myArray.includes(2));//--returns boolean value
//indexOf() -- returns element of particular index
// const newArray = myArr.join //--converts array into strings
// console.log(myArray);


//splite,slice

console.log("A",myArray);
const arr1 = myArray.slice(1,3); // it doesn't  split original array
console.log("B",myArray);
console.log(arr1);


console.log("C",myArray);
const arr2 = myArray.splice(1,3); //It splits the original array
console.log("D",myArray);
console.log(arr2); 


