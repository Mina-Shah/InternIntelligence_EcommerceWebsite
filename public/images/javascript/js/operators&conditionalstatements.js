//COMMENT ["//"(single line comment) and "/* */"(multiple line comment)]
/*This is a code that prints   
hello world on console window*/
//console.log("hello world!");

/*    "OPERATORS" 
(used to perform some opertion on data)*/


//ARITHMETIC OPERATORS

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a + b); //addition
// console.log("a - b = ", a - b); //subtraction
// console.log("a * b = ", a * b); //multiplication
// console.log("a / b = ", a / b); //division
// console.log("a % b = ", a % b); //modulus
// console.log("a ** b = ", a ** b); // 5^2 = 5 * 5 = 25 //exponentiation

/*increment and decrement operators
 are called unary operators*/

//INCREMENT OPERATORS  [a++ -> a = a + 1]
// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);

//Use of a++
// console.log("a++ = ", a++); //change in the next line
// console.log("a =", a);

//Use of ++a
// console.log("++a =", ++a); //directly changes
// console.log("a =", a);

//DECREMENT OPERATORS  [a-- -> a = a- 1]
// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);

//Use of a--
// console.log("a-- = ", a--); //change in the next line
// console.log("a =", a);

//  //Use of --a
// console.log("--a = ", --a); //directly changes
// console.log("a =", a);

// //ASSIGNMENT OPERATORS
// let a = 5;
// let b = 2;

// // [=  ,  +=    ,        -=     ,      *=    ,      /=    ,     %=    ,    **= ]
// a **= 2; //(a= a + 2)  (a= a - 2)  (a= a * 2)  (a= a / 2)  (a= a % 2)  (a= a ** 2)
// console.log("a =", a);

//COMPARISON OPERATORS
//[ ==(compare) , !=(not compare) , ===(strictly compare) , !==(strictly not compare) ]
// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b); // The answer will print in boolean true or false

//string and number can compare equally
// let c = 5; //number
// let d = "5"; //string

// console.log("5 != 5", c == d);

//but in some cases we do not want to compare string & number equally
//And for that cases (===) and (!==) are used
/*triple equal to (===) and exclamation mark with double equal to
(!==)not only compare the values but also compare the data types*/

// let c = 5; //number
// let d = "5"; //string

// console.log("5 === 5 ", c === d);

// //[> , >= , < , <=]
// let a = 5;
// let b = 6;

// console.log("5 >= 6", a <= b);

//LOGICAL OPERATORS
//[ AND , OR, NOT]

//Logical AND(&&)
// let a = 12;
// let b = 15;

// console.log("cond1 && cond2 ", a < b && a === 12);

//Logical OR(||)
// let a = 5;
// let b = "6";

// let cond1 = a < b;
// let cond2 = a === 6;
// console.log("cond1 || cond2", cond1 || cond2);

//Logical NOT(!)
// let a = 10;
// let b = 6;

// console.log(" !(5>6)", !(a < b)); //works opposite

/*CONDITIONAL STATEMENTS
(to implement some conditions in code)*/
//if statement
//example 1
// let age = 20;

// if (age >= 18) {
//     console.log("you can vote");
// }

// if (age < 18) {
//     console.log("you CANNOT vote");
// }
//example 2
// let mode = "dark";
// let color ;

// if ( mode === "dark"){
// color= "black";
// }

// if ( mode === "light") {
//     color ="white";
// }
// console.log(color);

// //if else statement
// //example 1
// let mode = "purple"; //any color or mode we write here it will give the output "white"
// let color;

// if (mode === "dark") {
//   color = "black";
// }
// else{
//     color="white";
// }
// console.log("color =",color);
// //example 2
// let age = 14;

// if(age >= 18){
//     console.log("vote");
// }
// else{
//     console.log("not vote")
// }
// //example 3 odd or even
// let num = 21;

// if (num % 2 === 0) {
//   console.log(num, " is even");
// } else {
//   console.log(num, " is odd");
// }

// //syntax means rules of the language [syntax-> rules]

//else if statements
//example 1
// let mode = "pink";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }
// console.log(color);

// if (mode === "dark"); console.log(mode); //Can work like this but it's not a professional way

//TERNARY OPERATORS are special operators because they work on 3 operands
//[condition ? true : false] ("?" and ":" are the ternary operators)

// let age = 16;

// let result = age >= 18 ? "adult" : "NOT adult"; //simpler and compact if-else
// console.log(result);

// age >= 18 ? console.log("adult") : console.log("NOT adult");

//Read MDN Docs which is all about [Html , CSS , Javascript]

//Practice Ques.1
//ALERT
// alert("hello!"); //alert is a one time pop up

// //PROMPT
// let num = prompt("Enter a number"); //prompt is a temporary way of taking users information

// if (num % 3 === 0) {
//   console.log(num, "is a multiple of 3");
// } else {
//   console.log(num, "is NOT a multiple of 3");
// }

//Practice Ques.2 - JS Program

// let score = prompt("enter your score.. [0 - 100]:");
// let Grade;

// if (score >= 90 && score <= 100) {
//   Grade = "A";
// } else if (score >= 70 && score <= 89) {
//   Grade = "B";
// } else if (score >= 60 && score <= 69) {
//   Grade = "C";
// } else if (score >= 50 && score <= 59) {
//   Grade = "D";
// } else if (score >= 0 && score <= 49) Grade = "F";

// console.log("according to your scores your grade is : ", Grade);


//practice again
// let marks = prompt("Enter your marks ...[0 - 100]:")
// let grade ;

// if(marks >= 80 && marks <= 100)
// {
//   grade="A+";
// }
// else if(marks >= 70 && marks <= 79){
//   grade = "A"
// }
// else if (marks >= 60 && marks <= 69)
// {
//   grade="B"
// }
// else if (marks >= 50 && marks <= 59)
//   {
//     grade="C"
//   }else if (marks >= 40 && marks <= 49)
//     {
//       grade="D"
//     }
//     else {
//       grade= "FAIL"
//     }

//     console.log("a/c to your marks your grade is "  + (grade))

//Switch Statements By MDN Docs
// const foo = 5;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// // Logs 0 and 1

//Using BLOCK SCOPE
// const action = "say_hello";
// switch (action) {
//   case "say_hello": {
//     // 1st Single Block scope [ "{" "}" ] so that 2 const or let with same name can be used in the same code
//     const message = "hello";
//     console.log(message);
//     break;
//   } // Block scope till here
//   case "say_hi": {
//     // 2nd Single Block scope [ "{" "}" ]
//     const message = "hi";
//     console.log(message);
//     break;
//   } // Block scope till here
//   default:
//     console.log("Empty action received.");
// }

// Practice from Examples
// expr = "blueberry";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound");
//     break;
//   case "Apples":
//     console.log("Apples are $0.32 a pound");
//     break;
//   case "Bananas":
//     console.log("Bananas are $0.48 a pound");
//     break;
//   case "Cherries":
//     console.log("Cherries are $3.00 a pound");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and Papayas are $2.79 a pound");
//     break;

//   default:
//     console.log("Sorry, we are out of $(expr)");
// }

// console.log("Is there anything else you'd like?");

//Putting the DEFAULT clause between two cases
// const foo = 5;
// switch (foo) {
//   case 2:
//     console.log("2");

//   default:
//     console.log("default");
//   case 1:
//     console.log("1");
// }

//Advantage of Fall-Through
// const Animal = "Dog";
// switch (Animal) {
//   case "Cow":
//   case "Giraffe":
//   case "Dog":
//     console.log("This animal is not extinct");
//     break;
//   case "Dinosaur":
//   case "Dodo":
//   default:
//     console.log("This animal is extinct");
// }

//Practice from Examples
// const hello = 0 ;
// let output = "Output: ";
// switch (hello) {
//   case 0:
//     output += "So, ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name ";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }
