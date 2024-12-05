//singleton 
//when object created as constructor it is singlton

//object literals

const mySymbol =  Symbol("key1");
//Symbol - is a datatype in js

const employees = {
    fName:"Darshan",
    lName:"University",
    email:"darshan@gmail.com",
    age:15,
    isLoggedIn: false,
    // "mySymbol":"MyKey1",
    [mySymbol]:"MyKey1"
};
//all the keys considered as string

// console.log(employees.fName);
// console.log(employees["fName"]);
// console.log( employees[mySymbol]);
// console.log(typeof employees[mySymbol]);//**** */



employees.email = "kevin.kagathara248@gmail.com";
// console.log(employees);
// Object.freeze(employees); // this method don't allow you to change the value of any key of object
employees.email = "darshanUniversity@gmnail.com";
// console.log(employees);

employees.greeting = function()
{
        console.log("Hello World");
}

employees.greeting2 = function()
{
    console.log(`My name is ${this.fName}`);
    
}

console.log(employees.greeting); // here only for function reference
// employees.greeting();
// employees.greeting2();

