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
        return 0;
    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        gameOutput.textContent = "You Win! " + playerSelection +" beats " + computerSelection;
        return 1;
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        gameOutput.textContent = "You Lose! " + computerSelection +" beats " + playerSelection;
        return 0;
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        gameOutput.textContent = "You Win! " + playerSelection +" beats " + computerSelection;
        return 1;
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        gameOutput.textContent = "You Lose! "+ computerSelection +" beats " + playerSelection;
        return 0;
    }else{
        gameOutput.textContent = "You Win! "+ playerSelection +" beats " + computerSelection;
        return 1;
    }
  }
   
  function game(){
    let gamesWon = 0;
    console.log("You won " + gamesWon + " games!!!");
  }


  window.onload = function(){
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
