const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//${} is used for variable interpolation 

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);//__proto__ is used to access the prototype object, which contains 
//shared methods and properties of that type (like String, Array, Object, etc.)


// console.log(gameName.length);// it will give length of string
// console.log(gameName.toUpperCase());// it will convert string to uppercase
// console.log(gameName.toLowerCase());// it will convert string to lowercase
console.log(gameName.charAt(2));// it will give character at index 2
console.log(gameName.indexOf('t'));// it will give index of character 't'

const newString = gameName.substring(0, 4)// it will give string from index 0 to 4 (4 is not included)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)// it will give string from index -8 to 4 (4 is not included)
console.log(anotherString);
let arr = [1, 2, 3, 4];
console.log(arr.splice(1,2));// it will remove elements from array starting from index 1 , 2 
// elements will be removed and then after that it will return remaining elements as array[1,4].
// it is changing original array. and return removed elements as array[2,3] 

const newStringOne = "   hitesh    "
// console.log(newStringOne); .
console.log(newStringOne.trim());// it will remove spaces from starting and ending

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('choudhary', 'gurjar'))//replace() method searches a string for a specified value, or a regular expression,
// and returns a new string where the specified values are replaced.

console.log(url.includes('bholu'))//includes() method checks if a string contains a specified value and returns true or false

// console.log(gameName.split(''));//split() method divides a String into an ordered list of substrings,
//  puts these substrings into an array, and returns the array.