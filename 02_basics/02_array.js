const marvelHeroes = ["Ironman", "Spiderman", "Doctor Strange"]

const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes);
//if you push one array into another array then it becomes element of first array
//also array can take any type of value
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2]);

// const mergedHeros = marvelHeroes.concat(dcHeroes);
//concat - merged two arrays and returns another array
// console.log(mergedHeros);

// const allHeros = [...marvelHeroes, ...dcHeroes];
//... spread operator - think like drop glass it is spread
// console.log(allHeros);


const anotherArray = [1,2,3,[4,5,6],[7,[,8,9,[10,11]]]]

const seprateArrays = anotherArray.flat(3);
//flat(depth) -- it defines the depth of the array
console.log(seprateArrays);


console.log(Array.isArray("Alexa"));
console.log(Array.from("Alexa"));
console.log(Array.from({name:"Alexa"})); //***** */


let batsman1 = "Rututraj";
let batsman2 = "Rohit";
let batsman3 = "Jadeja";
let batsman4 = "Virat";

console.log(Array.of(batsman1,batsman2,batsman3,batsman4));



