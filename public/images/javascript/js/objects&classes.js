// Objects & Classes
/* A javascript object is an entity having state and behavior
(properties and methods)*/

// const student = {
//     fullName : "Ali", 
//     class : "10th",
//     //these are both properties

//     //1st way of peinting
//     printClass : function() {
//         console.log("class = " , this.class)// student.class
//     },

//     //2nd
//     printClass2() {
//         console.log("class = " , this.class)
//     }
//     //these are methods 
// };

// /* JS object have a special property called prototype 
// which is also an object itself */

// //objects inherit the properties & method from theur basic prototype object

// const employee = {
//    calctax() {
//     console.log("tax rate is 20%");
//    },
// };

// const Ali = {
//     salary: 80000,
// };

// const ahmad = {
//     salary: 80000,
// };

// const taha = {
//     salary: 80000,
// };

// const laiba = {
//     salary: 80000,
// };

// const sara = {
//     salary: 80000,
// };

// const sana = {
//     salary: 80000,
// };
 

// //      refernce to an object
// //              |
// //we can set prototype using ( __proto__ )
// Ali.__proto__= employee; //to make our own prototype
// ahmad.__proto__=employee;
// taha.__proto__=employee;
// laiba.__proto__=employee;
// sara.__proto__=employee;
// sana.__proto__=employee
// /*we do not have to write the same thing for each & every person
//  just we set prototype(employee) for each*/ 

// //if object & prototype have same method,object's method will be used.//
// const employee2 = {
//     calctax() {
//      console.log("tax rate is 20%");
//     },
//  };
 
//  const Ali2 = {
//      salary: 80000,
//      calctax() {
//         console.log("tax rate is 30%");
//        },
//  };

// Ali2.__proto__=employee2


//Classes (is a program-code-template for creating objects)
/*Those objects will have some state(variables) & behaviour(functions)
inside it*/
//we can create differet differet objects through classes
// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//        this.brandName=brand;
//     }n
// }

// let fortuner= new ToyotaCar();//new is a keyword to create new objects
// fortuner.setBrand("fortuner");
// //ToyotaCar() class is a template for fortuner object
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");

//classes are created when we have to create multiple object on same template.

//Constructor() method is a special method that is automaticaly invoked by new object even though if not used it in our code
/* automatically invoked by new
   initializes object 
   */
/* when new object is created, at the time of creation if we 
have to do something like to initialize something or to set
new properties for that we use our Constructor() */
//2nd
// class ToyotaCar2{
//     constructor(brand ,milage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.milage=milage
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner2= new ToyotaCar2("fortuner2",10);//new is a keyword to create new objects
// console.log(fortuner2)
// //ToyotaCar() class is a template for fortuner
// let lexus2 = new ToyotaCar2("lexus2",20);//undefined
// console.log(lexus2)

//Inheritance in JS (inheritance is a programming concept)
//inheritance is passing down properties & methods from parent class to child class
/*
class Parent{

}

class Child extends Parent{

}
*/

class Parent {
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}

let obj = new Child();


class Person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person {
    work(){
        console.log("solve problem ,build something")
    }
}

class Teacher extends Person {
    work(){
        console.log("teach students")
    }
}


let mahnoorobj = new Engineer();
let saraobj =new Teacher()

// if Child & Parent have same method, child's method will be used.(Method Overriding)

// class Person2 {
//     constructor(){
//         this.species="home sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer2 extends Person2 {
//     work(){
//         console.log("solve problems ,build something")
//     }
// }

// class Teacher2 extends Person2 {
//     work(){
//         console.log("teach students")
//     }
// }

// let aliobj = new Engineer2();
// let saadobj =new Teacher2()

//if we store any value in parent at any time it will also work for child as it is extend by child

/*super Keyword (the super keyword is used to call the 
constructor of its parent to access the parent's properties 
and methods)*/

//child class also called derived class as it inherit something

// class Person2 {
//     constructor(){
//         this.species="home sapiens";
//         console.log("enter parent constructor")
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer2 extends Person2 {
//     constructor(branch){
//         console.log("enter child constructor")
//         super();//to invoke parent class's constructor
//         this.branch = branch
//         console.log("exit child constructor")

//     }
//     work(){
//         console.log("solve problems ,build something")
//     }
// }


// let engobj = new Engineer2("chemical engggg");

//also use super for these purposes
// class Person2 {
//     constructor(name){
//         this.species="home sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer2 extends Person2 {
//     constructor(name){
//         super(name);//to invoke parent class's constructor
//     }
//     work(){
//         super.eat();//by writing like this code will run first then the next line will run or any other
//         console.log("solve problems ,build something")
//     }
// }


// let engobj = new Engineer2("mahnoor");

// //Practice Qno.1
//part 1
let DATA= "secret information";
class User{
    constructor(name ,email){
        this.name= name;
        this.email=email;
    }

    viewData(){
        console.log("data = " , DATA);
    }
}

//part 2
class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        DATA ="some new value";
    }
}

let student1 = new User("mahnoor" , "abc@gmail.com ");
let student2 = new User("aman" , "aman@gmail.com ");

let teacher1 = new User("sara" , "sara@gmail.com ");

let admin1 = new Admin("admin" , "admin@mywork.com");

//Error Handling

// ERROR
// let a = 10;
// let b = 5;
// console.log("a = ",a)
// console.log("b = ",b)
// console.log("a+b = " , a+b);
// console.log("a+b = " , a+b);
// console.log("a+b = " , a+c);//error //becauce of the error the code after the error will also not run
// console.log("a+b = " , a+b);
// console.log("a+b = " , a+b);
// console.log("a+b = " , a+b);
// console.log("a+b = " , a+b);

// ERROR HANDLING
let a = 10;
let b = 5;
console.log("a = ",a)
console.log("b = ",b)
console.log("a+b = " , a+b);
console.log("a+b = " , a+b);
try{
    console.log("a+b = " , a+c);//error //becauce of the error the code after the error will also not run
}catch(error){  //now here it will catch the error and the code after error will run
    console.log(error);
}
console.log("a+b = " , a+b);
console.log("a+b = " , a+b);
console.log("a+b = " , a+b);
console.log("a+b = " , a+b);
