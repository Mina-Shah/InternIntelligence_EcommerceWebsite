// Arrays (collection of items)[ a way to store same type of information in a linear form]

// storing info using simple variables
// let mark1= 21;
// let mark2 = 32;
// let mark3 = 45;

// console.log(mark1 , mark2 , mark3);

// storing info using object
// let marks_students = {
//     stu1 : 45,
//     stu2 : 48,
//     stu3 : 64,
//     stu4 : 74
// }
// console.log(marks_students);

/* Array is a special type of object in javascript. Array also have
pairs like the object but index is written in the replacement of
keys
*/

// storing info using ARRAYS

// let heroes = ["batsman", "spiderman", "thor", "superman", "hulk"];
// console.log(heroes);

// let marks =[34,43,52,68,73,95];
// console.log(marks);


/* we can change the value inside array because arrays are mutable
 but cannot a string because string are immutable*/

//  Looping over an ARRAY
// loops are used for iterables( the items on which we can iterate )
//iterable -> 1)string 2)object 3)array  //all are collection of items

//for loop
// let heroes = ["batsman", "spiderman", "thor", "superman", "hulk"];
//  for(let i = 0; i < heroes.length ; i++)
//  {
//     console.log(heroes[i]);
//  }

//for of loop
// let heroes = ["batsman", "spiderman", "thor", "superman", "hulk"];
//  for(let val of heroes){
//     console.log(val);
//  }

//  let cities = ["karachi" , "hyderabad" , "lahore" , "faisalabad"];
//  for (let city of cities)
// {
//     console.log(city.toUpperCase());
// }

// Practice Qno.1

// let marks = [85, 97, 44, 37, 76, 60];
// let i = 0;
// sum = 0 ;

// for(let val of marks){
//    sum = sum + val;
// }
// console.log("sum of th marks of students =" ,sum);
// let avg = sum / marks.length ;
// console.log(`avg marks of entire class = ${avg}`); //by using template literals
// console.log("avg marks of entire class = " , avg);

// for (i = 0; i < marks.length; i++) {
//   sum = sum + marks[i];

//    console.log(sum);
//   let avg = sum / marks.length;
//   console.log(avg);
// }


// Practice Qno.2
// let items = [250, 645, 300, 900, 50];
// let i = 0;

// for(let val of items){
//     console.log(`value at index ${i} = ${val}` );
//     let offer = val / 10;
//     items[i] = val - offer;
//      console.log("After 10% off",items[i]);
//     i++;
// }

// for (let i = 0; i < items.length; i++) {
//   console.log(`value at ${i} = ${items[i]}`);
//   let offer = items[i] / 10;
//   items[i] = items[i] - offer;
// }
// console.log("After 10% off",items);

// let dresses = [500, 400, 300, 200, 100];
// let i = 0 ;

// for(let i = 0 ; i < dresses.length ; i++)
// {
//     console.log(`value at index ${i} = ${dresses[i]}`);
//     let offer = dresses[i] / 10;
//     dresses[i] -= offer;
// }
// console.log("price of dresses after 10% off = " , dresses)

// for(let price of dresses){
//     console.log(`value at ${i} = ${price}`);
//     let offer = price/ 10;
//     dresses[i] -= offer;
//     console.log(`price of dresses after 10% off = ${dresses[i]}`);
//      i++;
// }

// let toys = [700, 600, 500, 400, 300, 200, 100];
// let i = 0;

// for(let i=0;i<toys.length; i++){
//     console.log(`value of index at ${i} = ${toys[i]}`);
//     let offer= toys[i]/10;
//     toys[i]-=offer;
// }
// console.log(toys);

// for(let price of toys){
//     console.log(`value of index at ${i} = ${price}`);
//     let offer= price /10;
//     toys[i] = price - offer;
//     console.log(toys[i]);
//        i++;
// }

// while (i < toys.length) {
//   console.log(`value of index at ${i} = ${toys[i]}`);
//   let offer = toys[i] / 10;
//   toys[i] -= offer;
//   console.log(toys[i]);
//   i++;
// }

// do {
//   console.log(`value of index at ${i} = ${toys[i]}`);
//   let offer = toys[i] / 10;
//   toys[i] -= offer;
//   console.log(toys[i]);
//   i++;
// } while (i < toys.length);

//Some of the data of every website is stored in the form of Arrays.
/*In arrays there are 2 types of methods Number:1 that changes the 
array. Number:2 that gives a new array.But strings only gives a new
value as the strings are immutable*/

//Array Methods
//1)push
// let foodItems = ["burger" , "pizza" , "chips" , "pasta"]; //like in this method the array is changed it does not gives a new array
// foodItems.push("olives" , "noodles");
// console.log(foodItems);

//2)pop
// let veggies=["tomato" , "potato" , "onion" , "capsicum"];
// console.log(veggies);
// let deletedItem = veggies.pop();
// console.log(veggies);
// console.log("deleted" ,deletedItem);

//3)toString
// let foodItems = [21,21,2,24];
// console.log(foodItems);
// console.log(foodItems.toString());// in toString it gives a new string not changes in the array
// console.log(foodItems);

//4)concat
// let marvel_heroes = ["batsman", "spiderman", "thor", "hulk"];
// let fg_heroes = ["ironman", "superman" ];
// console.log(marvel_heroes.concat(fg_heroes));//not changes in the array

//5)both shift & unshift are used as puch/pop but in start
// let marvelHeroes = ["batsman", "spiderman", "thor", "hulk"];
// marvelHeroes.unshift("hero");

//6)
// let val = marvel_heroes.shift();

// console.log("deleted",val);

//7)slice
// let marvel_heroes = ["batsman", "spiderman", "thor", "hulk"];
// console.log(marvel_heroes.slice(0,3));

//8)splice
let arr = [1, 2, 3, 4, 5, 6, 7, 8,];
// arr.splice(3,2,34,56);
//add element
// arr.splice(2,0,23);
//delete element
// arr.splice(2,3);
//replace element
// arr.splice(3,1,99);

//Practice Qno.1

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log("removes first company from array", companies);

let companies2 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies2.splice(2, 1, "Ola");
console.log("replace uber & add Ola in its place", companies2);

let companies3 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies3.push("Amazon");
console.log("add amazon at the end" , companies3);


//1D Array 
let array = ["apple" , "banana" , "mango"]

//2D Array
let array2 = [["apple" , "banana"] , ["tomato" , "potato"] , ["shirts" , "pants"]]