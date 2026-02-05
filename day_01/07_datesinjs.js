// Dates

let myDate = new Date()// it will give current date and time
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());// it will give only date without time
console.log(myDate.toTimeString());// it will give only time without date
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);// it will give time in milliseconds from 1 jan 1970 to now
// console.log(myCreatedDate.getTime());// 
// console.log(Math.floor(Date.now()/1000));//

let newDate = new Date()
console.log(newDate);// it will give current date and time
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
