const name = "soraj"
const repoCount = 25

// console.log(name + repoCount + " Value"); //not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('soraj-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0, 4) //it will not take negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4) // it will take negative value
console.log(anotherString);

const newStringOne = "   soraj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://soraj.com/soraj%20Bomrel'

console.log(url.replace('%20', '-'));
console.log(url.includes('soraj'));

console.log(gameName.split('-'));
