// Function (is the block of code that performs a specific
//  task,can be call whenever needed.)

/*we always use parenthesis "()" while using functions because 
parenthesis are the way to call /invoke functions. We give our
input in parenthesis.
*/

/* 
reserved  name of 
word      the function
    |         |   
function functionName(){
     
//    do some work

}*/

// functionName(); -> calling function

/*the benefit of function is that we do not need to type the same
code again & again. Just we have to call the function*/
// saves us from redundancy -> repeat

// function abc(){
//     console.log("hello!!!")
// }
// abc();
// abc();

// function xyz(msg)//parameters
// {
//     console.log(msg);
// }

// xyz("hi!!!!"); //argument

// // NaN -> Not a Number

// function -> sum of 2 numbers
// function sum( a , b ){
//     document.write(a + b);
// }
// sum(23 , 4);

// // use of return
// function qw(x , y){
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }
// let val = qw(2, 10);
// console.log(val);
// /* nothing will execute after writing return. When we write
//  return it's generally our last line. */

// /* 2nd
// reserved   name of
// word      the function    parameters->(are like local variables of function and they have block scope)scope means variable kahan tk zinda hai?
//     |         |              |
// function functionName(param1, param2...){

// //    do some work

// }  */

// function lv(a, b) {
//   console.log(a + b);
// console.log(a); //inside block scope
// }
// lv(45, 4);
// console.log(a);//outside block scope

//MODERN JS FEATURE
// Arrow Functions (=>)sign

/*     function   the right side part is
       variable    arrow function
         |             |        */
// const arrowSum = (a , b) =>{
//     console.log(a + b);
// };
// arrowSum(12,34);

// const arrowMulti = (a, b) => {
//   return a * b; //we can also give return to arrow functions
// };

// //arrow functions are used for small type of work

// const print=() =>{
//     console.log("hello");
//     // return "hi"
// }

// Practice Qno.1
// by using functions
// function countVowel(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowel("hii"))

// // by using arrow functions
// const vowelCount = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

//again practice
// function vowels(string) {
//   count = 0;
//   for (let character of string)
//     if (
//       character === "a" ||
//       character === "e" ||
//       character === "i" ||
//       character === "o" ||
//       character === "u"
//     ) {
//       count++;
//     }
//   console.log(count);
// }
// console.log(vowels("i am mahnoor"));

/*Functions can take input arguments and return output values.
 On the other hand, a method is a function that is associated 
 with an object in object-oriented programming.*/

/*functions can be pass & return from anywhere in javascript */

function abc() {
  console.log("hello"); //pass
}

function myFunction(abc) {
  return abc; //return
}

// forEach (loop use in arrays)

/* 
arr.forEach(callBackFunction)
//              |
here, it is a function to execute for each element in the array.

A callback is a function passed as an argument/parameter to 
another function.
*/

// let arr6 = ["karachi" ,"hyderabad" ,4 ,5 ,6]

// arr6.forEach(function abc(val){ //val means value at each index
//   console.log(val);
// })

// /*generally, the callback in forEach is passed in the form of
// an arrow function*/

// let arr6 = ["karachi" ,"hyderabad" ,4 ,5 ,6]
// arr6.forEach((val) =>{
//   console.log(val.toUpperCase());
// });

// //can use 3 parameters in the callback in forEach
// let array3 = ["karachi"  ,4 ,5 ,6]
// //               1       2      3(parameters)
// //               |       |      |
// array3.forEach((value , index ,array) =>{
//   console.log(index , value ,array);
// }
// )

//forEach method is used for arrays not use for strings(gives error when used)

/* forEach is higher order function(HOF) or higher order method(HOM)

HOF are the functions that takes another function as a parameter or
returns another function as a value(output).

jahan bhi callback ho wo higher order function hai
*/

// Practice Qno.2
//forEach

// let number= [1 ,2 ,3 ,4 ,5, 6 ,199];

// number.forEach((value)=>{
//   console.log(value,"square is" ,number*number); //number**2 is also a valid way
// })

// //can also pass callbacks in this way
// let calcSquare = (number) => {
//   console.log(number, "square is", number * number);
// };

// number.forEach(calcSquare);

//Some important (modern) Array Methods for our ease
/*1)Map (is very similar to forEach method. The difference between
them is that map returns a new array and forEach do not.)*/

//same 3 parameters in the callbacks are used (value , index ,array)
let nums = [33, 23, 45, 54];

let newArr = nums.map((val) => {
  return val + val;
});

console.log(newArr);

/*2)filter (a/c to condition returns new array. The values which
are true a/c to condition only that will be printed and the other
will not. )*/
let arr = [1, 2, 3, 4, 5, 6];

let evenArr = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);

/*3)reduce (performs some operations in input and gives a
 SINGLE output e.g : sum ,total ,average)*/

//2 callbacks are used (accumulator or result or previousvalue , currentValue)

// let arr2 = [1, 2, 3, 4];

// const output = arr2.reduce((result, current) => {
//   return result + current;
// });
// console.log(output);

// //to find greater value
// let arr3 = [1, 2, 3, 4, 5];

// const output2 = arr3.reduce((result, current) => {
//   return result > current ? result : current;
// });
// console.log(output2);


// //Practice Qno.3

// let studNum = [86, 92, 55, 96, 86, 98];

// let filterNum = studNum.filter((val) => {
//   return val > 90;
// });

// console.log(filterNum);

// //Practice Qno.4

// let n = prompt("enter a number :");

// let array = [];

// for (let i = 1; i <= n; i++) {
//   array[i - 1] = i;
// }
// console.log(array);

// let sum = array.reduce((res , curr)=>{
//   return res + curr;
// });
// console.log("sum is" ,sum);

// let factorial= array.reduce((res , curr)=>{
//   return res * curr;
// })
// console.log("factorial is",factorial);