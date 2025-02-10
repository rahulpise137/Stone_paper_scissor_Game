let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options = ["stone","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];

};

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = " #8f6593"
};

const showWinner=(userWin, userChoice, compChoice ) =>{
     if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
     }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
     }
};

const playGame = (userChoice) =>{
    //Generate computer Choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Game draw
        drawGame();
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin= compChoice === "paper" ? false:true;
        }else if(userChoice==="paper"){
            //stone,scissor
            userWin=compChoice === "scissor" ? false:true;
        }else{
            //stone,paper
            userWin=compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

    
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});