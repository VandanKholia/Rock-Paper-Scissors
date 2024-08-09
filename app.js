let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector(".message");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
//Generating computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice == compChoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userChoice == "rock" && compChoice == "paper" || userChoice == "paper" && compChoice == "scissors"
            || userChoice == "scissors" && compChoice == "rock") {
            userWin = false;
            winner(userWin, userChoice, compChoice);
        } else {
            userWin = true;
            winner(userWin, userChoice, compChoice);
        }
    }
};
//Draw
const draw = () => {
    msg.innerHTML = "Draw";
    msg.style.backgroundColor = "black";
    drawScore++;
    drawScorePara.innerHTML = drawScore;
};
//Winner
const winner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerHTML = userScore;
     } else {
        msg.innerHTML = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerHTML = compScore;

    }
};

