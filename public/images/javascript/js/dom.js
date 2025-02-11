/* Window Object  (represents an open window in a browser. It is 
browser's object (not javascript's) & automatically created by 
browser.)

It is a global object with lots of properties & methods.
*/
// console.log("hello"); //our javascript code knows about window object 
// window.console.log("hi")//we do not need to write in this way

// window.alert("hello");

/* console.log only prints work on screen as an element but console.dir
prints properties of special objects like (document) */

// console.log -> document -> elements -> print
// comsole.dir -> document -> properties -> print


/*we can also check our code like this to see the
information of each tag*/
// console.dir(document.body)
// console.dir(document.body.childNodes[2])

//all the dynamic changes are made through javascript
// console.log(document.body.style.background="blue")
// document.body.style.background="pink"//not the permanent change but when the user click a button or something it dynamically changes the color for user

//dynamically change the text
// console.log(document.body.childNodes[1].innerText="hiiiii")
// document.body.childNodes[1].innerText="hiiiii"//dynamic change

// //DOM Manipulation 
// //1) Selecting with id
// let heading= document.getElementById("myid");
// console.dir(heading);

// //2) Selecting with class
// let heading2= document.getElementsByClassName("myclass");
// console.dir(heading2);
// console.log(heading2);

// //3) Selecting with tag
// let para = document.getElementsByTagName("p");
// console.log(para)

// //4) Query Selectors
// let firstelement = document.querySelector('p')//returns 1st element
// console.dir(firstelement)

// let allelement = document.querySelectorAll("p")//returns all elements
// console.dir(allelement)

// let class1 = document.querySelector(".myclass")
// console.dir(class1)

// let class2 = document.querySelectorAll(".myclass")
// console.dir(class2)

// let id = document.querySelector("#myid")
// console.dir(id)
// //id is use for unique that's why not use for (querySelectorALL)

// //Properties
// //1)tagName (returns tag for element nodes)
// class1.tagName //to find which tag class1 is used

// //2)innerText (returns text content of the elements and all of its children  )
// let div = document.querySelector("div")
// console.dir(div);

// //3)innerHTML (returns the plain text or HTML content in the element )
// let div2 = document.querySelector("div")
// console.dir(div2);
// //we can also set the values of innerText & innerHTML dynamically

// //4)textContent (returns the textual content even for hidden element)
// let heading3 = document.querySelector("h1");


// //to find the chilfren of nodes
// document.querySelector("div").children// returns HTML Collection

// //firstChild property
// document.querySelector("div").firstChild //returns text nodes
// document.querySelector("div").firstElementChild// returns element

// //lastChild property
// document.querySelector("div").lastChild //returns text nodes
// document.querySelector("div").lastElementChild// returns element


//Practice Qno.1
// let h2 = document.querySelector("h2"); //first access
// console.dir(h2.innerText); //then which property

// h2.innerText = h2.innerText + " from apna college student"//then what to change

// //Practice Qno.2
// let divs = document.querySelectorAll(".box")
// console.dir(divs)

// //1st way
// index = 1
// for(div of divs){
// div.innerText= `box ${index}`
// index++;
// }

//2nd way
// divs[0].innerText="box 1"
// divs[1].innerText="box 2"
// divs[2].innerText="box 3"

//DOM Manipulation
//Attributes
// (to get the attribute value)
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = document.querySelector('p');
// console.log(name.getAttribute("class"));

// // (to set the attribute value)
// let id2 = div.setAttribute("id" , "para")
// console.log(id2);

// let name2 = document.querySelector('p');
// console.log(name.setAttribute("class" , "new-name"));

//node.style (to access styling in javascript)
// div.style.backgroundColor ="darkblue";
// div.style.width = "100px"
// div.style.height= "100px"

// div.style.color= "white"

// div.innerText = "hello!!"

// //Insert Elements (to add new elements)
let div = document.querySelector("div");
console.log(div);

let btn = document.createElement("button")
btn.innerText=" Click Me"
console.log(btn);

//1)node.append() [adds at the end of node(inside)]
div.append(btn)

//2)node.prepend() [adds at the start of node(inside)]
div.prepend(btn)

//3)node.before() [adds before the node(outside)]
// div.after(btn)

//4)node.after() [adds after the node(outside)]
// div.before(btn)


// let newheading = document.createElement("h1")
// newheading.innerHTML= "<i> hello </i>"

// document.querySelector("body").prepend(newheading);

// let name =document.querySelector("p")
// name.remove()

// // Practice Qno.1
// let newbtn = document.createElement("button");
// newbtn.innerText="click me";
// newbtn.style.backgroundColor= "red";
// newbtn.style.color ="white";

// let body = document.querySelector("body").prepend(newbtn)

// // Practice Qno.2
// let para = document.querySelector("p");

// para.classList.add("newpara");//classlist is used to add a new class without removing styling of previos class
