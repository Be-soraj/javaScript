// Primitive Data Types

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100 //data type is number
const scoreValue = 100.3 //data type is number

const isLoggedIn = false // data type is boolean
const outsideTemp = null //data type is object
let userEmail; //data type is undefined

const id = Symbol('123') //data type is symbol
const anotherId = Symbol('123') //data type is symbol

console.log(id === anotherId); //data type is boolean

const bigNumber = 3456543576654356754n //data type is bigint


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //data type is object
let myObj = {
      name: "sorj",
      age: 22,
} //data type is object

const myFunction = function () {
      console.log("Hello world");
} //data type is function

console.log(typeof anotherId);