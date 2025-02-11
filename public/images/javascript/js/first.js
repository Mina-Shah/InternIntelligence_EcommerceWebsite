// //The first code of JS (console.log)
// fullName = "Mahnoor Asif";
// age = "17";
// price = 99.99;
// radius = 14;
// x = null;
// y = undefined;
// isfollow = false;
// console.log(isfollow);

//Variables are containers in which we store data
//we use some reserved words/keywords infront of variables
// /*There are 3 keywords in js
// 1. var
// 2. let
// 3. const

// About var keyword*/
// var age = 24;

// var age = 34;

// var age = 18;
// console.log(age);

// //About let keyword
// let age = 44;
// age = 24;
// age = 16;
// console.log(age);

// //About const keyword
// const PI = 3.14;
// console.log(PI);

// //About undefined
// let a;
// console.log(a);

// //From open bracket "{" to close bracket"}"
// //it is called block

// //first block
// {
//   let a = 5;
//   console.log(a);
// }

// //second block
// {
//   let a = 22;
//   console.log(a);
// }

// //The 7 Primitive Data Types
// let a = 24; //number

// let b = "Ali"; //string

// isFollow = true; //boolean

// let x; //undefined

// let y = null; //null

// let c = BigInt(123456); //bigint

// let d = Symbol("hello!"); //symbol

// //About object (collection of values)
// const student = {
//   //const can not update but (const-object-"key") can update
//   fullName: "Ali Ahmad",
//   age: 17,
//   cgpa: 3.5,
//   isPass: true,
// };
// console.log(student);

//also can change if we want to
// student["age"] = student["age"] + 1;
// student["fullName"] = "Ali Saad";

// console.log(student["age"]);
// console.log(student.fullName);

// const name = "Ali";
// name = "Taha"; //const can not update

//Practice Qno.1
// const product = {
//   title: "ball pen",
//   rating: 4,
//   offer: 5,
//   price: 270,
// };

// console.log(product);

//Practice Qno.2
// const profile = {
//   username: "Mahnoor Asif",
//   isFollow: true,
//   posts: 195,
//   followers: 5690000,
//   following: 4,
// };

// console.log(typeof profile);
// console.log(typeof profile["username"]);

const student = {
  name : "ali" ,
  grade : 6 ,
  percentage : 80 ,
};

console.log(student);


student["name"]= "saad";
student["grade"]= student["grade"] +2;