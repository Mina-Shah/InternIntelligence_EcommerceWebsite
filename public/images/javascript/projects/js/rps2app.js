let userScore = 0;
let compScore = 0;

const msg = document.getElementById('msg');
const userScorePara = document.getElementById('user-score');
const compScorePara = document.getElementById('comp-score');


choices = document.querySelectorAll('.choice');

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("draw");
    msg.innerText= " Game was Draw. Play again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!!!");
        msg.innerText= `You Win!!! Your ${userChoice} BEATS ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose!!!");
        msg.innerText= `You Lose!!! ${compChoice} BEATS your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // console.log(userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log(compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper scissor
        userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissor"?false : true;
        }else{
            userWin = compChoice == "rock"? false :true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute('id');
        // console.log("choice was clicked" , userChoice);

        playGame(userChoice);
    });
});