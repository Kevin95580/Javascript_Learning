// const tinderUser = new Object(); /////#### ==>>> Single ton object
//const tinderUser = {} //****** Non Single ton object


const tinderUser = new Object();

tinderUser.ID = "101";
tinderUser.Name = "Sam Curran";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const instaUser = {
    email : "user@gmail.com",
    name:
    {
        firstname : "Ravindra",
        lastname:"Chaoudhary"
    }
}
// console.log(instaUser.name);
// console.log(instaUser.name.firstname);
// console.log(instaUser.name?.firstname); // if name value may be there or not

const obj1 = { 1:"a",2:"b"}
const obj2 = {3:"C",4:"D"}

// const obj3 = Object.assign({},obj1,obj2)####  {} - is optional, and this is target object and all other are source
const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks property 

