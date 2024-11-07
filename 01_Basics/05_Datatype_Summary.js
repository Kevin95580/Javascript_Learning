//there are mainly two types of data types how it can be retrieved from memory 

//Primitive 
//Non-Primitive

//++++++++++ Primitive Datatyes ++++++++++ (7 categories)--reference copy allocated 
//types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const score2 = 100.11;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
//const userEmail - const must be initialized

const id = Symbol('123');
const anotherId = Symbol('123');
//in Symbol returned value is not same 
console.log(id === anotherId);


//Reference type - Non-Premitive -- memory's refernce directly allocated
//Array, Objects, Functions
const heros = ["Ironman", "Thor", "Hulk"];
let myObj = {
    name:"Vasudev",
    age:25,
}

let myFunction = function(){
    console.log("Hello World");
    
}
myFunction();
