function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    if(num == 0 ){
        return "Rock";
    }else if (num == 1){
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let gameOutput = document.getElementById("game-output");
    while (playerSelection == computerSelection){
        computerSelection = getComputerChoice();
    }
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        gameOutput.textContent ="You Lose! " + computerSelection +" beats " + playerSelection;
        updateScore(0);
    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        gameOutput.textContent = "You Win! " + playerSelection +" beats " + computerSelection;
        updateScore(1);
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        gameOutput.textContent = "You Lose! " + computerSelection +" beats " + playerSelection;
        updateScore(0);
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        gameOutput.textContent = "You Win! " + playerSelection +" beats " + computerSelection;
        updateScore(1);
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        gameOutput.textContent = "You Lose! "+ computerSelection +" beats " + playerSelection;
        updateScore(0);
    }else{
        gameOutput.textContent = "You Win! "+ playerSelection +" beats " + computerSelection;
        updateScore(1);
    }
  }

function updateScore(score){
    let gameScore = document.getElementById("game-score");
    window.gamesPlayed +=1;
    if(score == -1){
        gameScore.textContent = "0";
        window.gamesPlayed =0;
    }
    else if(window.gamesPlayed >= 5){
        if(parseInt(gameScore.textContent) > 2){
            alert("Congratulations, You won!!");
        }else{
            alert("Sorry, You lose!!");
        }
        window.gamesPlayed =0;
        gameScore.textContent = "0";
    }
    else{
        gameScore.textContent = parseInt(gameScore.textContent) + score;
    }
}


window.onload = function(){
    window.gamesPlayed =0;
    let newGame = document.getElementById("new-game")
    newGame.addEventListener("click", function(){
        updateScore(-1);
    });
    let selectionRock = document.getElementById("rock")
    selectionRock.addEventListener("click", function(){
        playRound("Rock",getComputerChoice());
    });

    let selectionPaper = document.getElementById("paper")
    selectionPaper.addEventListener("click", function(){
        playRound("Paper",getComputerChoice());
    });

    let selectionScissors = document.getElementById("scissors")
    selectionScissors.addEventListener("click", function(){
        playRound("Scissors",getComputerChoice());
    });


  }
