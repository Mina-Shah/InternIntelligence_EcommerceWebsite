// The change in the state of an object is known as events
// we use events to trigger something
// when a user interact with our website at that time events can be created
// clicking a submit button on sign up form is an event itself
// the warning of low battery is also an event itself

// let btn1 = document.getElementById('btn1');

// btn1.onclick= () =>{ console.log('button was clicked');
//     let num = 100;
//     num--;
//     console.log(num);
// }
// //overwrite code
// btn1.onclick= () =>{ console.log('hey ya');
//     let num = 100;
//     num--;
//     console.log(num);
// }


// let div = document.querySelector('#box');
// div.onmouseover=() =>{(console.log('we are inside div'))
// }

/*no.1 if we are handling our events both with inline handle(1st way of handling) and 
js handle(2nd way of handling) the priority is of our javascript code */

/* no.2 if we are writing the same event again for btn1 then 
the code written in last will work means the recent one  */


// Event Object(it is a special object that has detail information about the event)

// btn1.onclick= (evt) =>{
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX , evt.clientY); //horizontaly & vertically occurs where the event is positioned
// }

/* Event Listener (access both inline and js[no priority] + can run
multiple times with same event) -> benefit of event listeners    */
//also can access event object using event listener
//so mostly we can do all of the work using event listeners that's why we prefer to use this


// btn1.addEventListener("click" , ()=>{
//     console.log("button handler1")
// });

// btn1.addEventListener("click" , ()=>{
//     console.log("button handler2")
// });

/*by doing like this it is stored at different position in memory... for memory
 they both are different and do not remove*/
// btn1.addEventListener("click" , ()=>{
//     console.log("button handler3");
// });

// btn1.removeEventListener("click", ()=>{
//     console.log("button handler3");
// });

// //Removing way
// //by doing like this it is stored as single memory and remove
// const handler4 = ()=>{
//     console.log("button handler4");
// }
// btn1.addEventListener("click" , handler4);


// btn1.removeEventListener("click" ,handler4);

//Note: the callback reference should be same to remove


//Practice Qno.1
// let modeBtn = document.getElementById('tgl-btn');
// let body=document.querySelector("body");
// let currMode ="light";

// modeBtn.addEventListener("click" , ()=>{
//     if(currMode === "light"){
//         currMode = "dark";
//     body.classList.add('dark');
//     body.classList.remove('light');

//     }else{
//         currMode = "light"
//         body.classList.add('light');
//     body.classList.remove('dark');

//     } 
//     console.log(currMode);
// });

//Practice Qno.2

let div = document.querySelector('.box');
let body = document.querySelector("body");

div.addEventListener('mouseover' , () => {
    body.classList.add("body-chng")
    console.log("by mouseover body's bg color changed ");
})