let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);// subtraction
// console.log(2*2);// multiplication
// console.log(2**3);// it is power operator
// console.log(2/3);// it will give decimal value
// console.log(2%3);// it will give remainder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);// string concatenation(12)
// console.log(1 + "2"); // string concatenation(12)
 console.log("1" + 2 + 2+2+3);//when string is first , it will consider all as string concatenation (122)
// console.log(1 + 2 + "2");// when number is first , it will consider all as addition until string comes(32)

// console.log( (3 + 4) * 5 % 3);// operator precedence work flow like maths BODMAS rule

// console.log(+true);// 1
// console.log(+false);// 0
// console.log(+"");// 0
console.log(+"33");// 33
console.log(+"33.33");// 33.33
console.log(+"-33.33");// -33.33
console.log(+"0x11");// 17
console.log(+"0b11");// 3
console.log(-"");// -0
// console.log(+"33abc");// NaN

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion