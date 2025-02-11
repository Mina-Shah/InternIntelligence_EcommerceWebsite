//LOOPS [used to execute a piece of code again & again]
// Three Types of Loops:
// 1) for Loop    2) while loop    3) do while loop

// for loop
//    initialization    condition     update
// for (let i = 1;       i <= 10;     i++) {
//   console.log("i = " + i);
// }

//Calculate sum of 1 to n
// let sum = 0;
// let n = 5;
// for (let i = = n; i++) {
//   sum = sum + i; //1; i <sum = 1 + 2
// }
// console.log("sum = ", sum);
// console.log("loop has ended");

//Infinite Loop: A Loop that never ends.
/* (Never try this loop because it takes a lot of memory as it always
 gives the condition true and never ends .CRASHES your Website.)*/

//while loop
// let i = 20; //initialization
// while (i <= 10) {
//   //condition
//   console.log(" i = " + i);
//   i++; //update
// }

//do while loop
// let i = 20; //initialization
// do {
//   console.log("i = " + i);
//   i++; //update
// } while (i <= 10); //condition

//for-of loop (we don't need to check initialization ,condition and update in for of loop. )
// [for of loop is used for strings and arrays]
// let str = "Javascript";
// let size = 0;

// for (let val of str) {
//   //val is iterator -> characters
//   console.log("val = ", val);
//   size++;
// }
// console.log("string size = ", size);

//for in loop
// [for in loop is used for objects]
// let student = {
//   name: "Mahnoor Asif",
//   age: 17,
//   percentage: 88,
//   isPass: true,
// };

// for (let key in student) // key is iterator
//{
//   console.log("key = ", key, "value = ", student[key]);
// }

//Practice Qno.1 [print even numbers from 0-100]
// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0) { //if odd numbers then !== 2
//     //even nummbers
//     console.log("num = ", i);
//   }
// }

//Practice Qno.2
// let gameNum = 25;

// let userNum = prompt("Guess the game number : ");

// while (userNum != gameNum) {
//   userNum = prompt("You entered wrong number . Guess again : ");
// }
// console.log("CONGRATULATIONS, You entered the right number ");

//Strings (sequence of characters to represent text)
// property gives a value
// let str = "Mahnoor" ;
// let str2 = "Asif";
// // built-in properties
// str.length; // to find length of string
// str2.length;

// console.log(str2[2]); // position

//Template Literals (special string)
// let specialString = `This is a template literal ${1 + 1 + 1}`;
// console.log(specialString);

// let obj = {
//   name: "pen",
//   price: 10,
// };

// console.log("The price of", obj.name, "is", obj.price, "rupees"); //the way we always use to write
// console.log(`The price of ${obj.name} is ${obj.price} rupees`); //with the use of template literals
// // ${obj.name} called String Interpolation in string

// console.log(`this is the sum of 3 numbers ${1+1+2}`);//the value which is calculated in the ${} is called string interpolation

//Escape Characters
// console.log("Mahnoor\tAsif");
// escape characters are count as 1

//String Methods(these are the built-in functions to manipulate a string)
//methods are the block of code that does some work for us

//strings are unchangeable/immutable
// let str = "Mahnoor Asif";
// let newstr = str.toUpperCase(); //we have to create a new string for achieving our output we want
// console.log(newstr);

// let str2 = "Mahnoor Asif";
// let newstr2 = str2.toLowerCase();
// console.log(newstr2);

// let str = "          Mahnoor Asif    JS     ";
// console.log(str.trim()); //str.trim() removes the white spaces in the start & end of the line

// let str = "hello";
// console.log(str.slice(0,3)); //returns part of string
// //in this slice it will not print the stoping index just the starting one will be added 

// let str = "hello";
// let str2 = "hi";
// console.log(str.concat(str2)); // also can concat by using "+" sign

// let str = "hellolololo";

// console.log(str.replace("lo", "p"));
// console.log(str.replaceAll("lo", "p"));

// let str = "Javascript";

// console.log(str.charAt(9)); // to find character of any index

//again practice
// for(let i=0 ; i<=100 ; i+=2){
//   console.log(i); //1st way
// }

// for(let i=0 ; i<=100 ; i++){

//   if( i % 2 === 0){  //2nd way
//     console.log(i);
//   }
// }

// let gamenum= 100;

// let guess= prompt("Guess the game number")

// while( guess != gamenum){
//   guess=prompt("you guess wrong number ..GUESS AGAIN")
// }alert("congratulations you guess right number")

//Practice Qno.
let fullName= prompt("enter your full name without spaces")
let b = "@"
let userName = b.concat(fullName + fullName.length);
console.log(userName);