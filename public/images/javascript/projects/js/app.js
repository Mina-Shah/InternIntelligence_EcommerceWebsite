let boxes =document.querySelectorAll('.box');
let resetBtn= document.querySelector('#reset-btn');
let newGameBtn=document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; //playerX , playerO

const winPatterns= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame=()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click" , () => {
        if(turnO){
            //playerO
            box.innerText="O";
            turnO = false;
        }else{
            //playerX 
            box.innerText="X";
            turnO = true;
        }
      box.disabled=true; // by doing this the player can not change the alphabet if he has played once

      checkWinner();
    });
});

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log(boxes[pattern[0]].innerText ,boxes[pattern[1]].innerText , boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
      
    }
}

const showWinner = (winner) =>{
    msg.innerText =`Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();//so that players can not play the same game again after 1 player wins
};                                     

const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);

const changeColor = () =>{
}