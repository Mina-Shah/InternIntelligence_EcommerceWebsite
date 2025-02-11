let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");

const genCompChoice= () =>{
    const options =["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("game was draw.")
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice ) => {
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        // console.log("you win!!");
        msg.innerText = `You Win!!! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText= compScore;
        // console.log("you lose!!");
        msg.innerText = `You Lose!!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log(userChoice);
    //Generate compter choice
    const compChoice = genCompChoice();
    // console.log(compChoice);

    if(userChoice === compChoice){
        //dram game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper , scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissor
            userWin = compChoice ==="scissor" ? false : true;
        }else { 
            //rock ,paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener( "click" , () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});