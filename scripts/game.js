function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    if(num == 0 ){
        return "Rock";
    }else if (num == 1){
        return "Paper";
    }
    return "Scissors";
}

function capitalize(str){
    const firstLetter = str.charAt(0).toUpperCase();
    return  firstLetter + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    while (playerSelection == computerSelection){
        computerSelection = getComputerChoice();
    }
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        console.log( "You Lose! " + computerSelection +" beats " + playerSelection);
        return 0;
    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log( "You Win! " + playerSelection +" beats " + computerSelection);
        return 1;
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log( "You Lose! " + computerSelection +" beats " + playerSelection);
        return 0;
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        console.log("You Win! " + playerSelection +" beats " + computerSelection);
        return 1;
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log( "You Lose! "+ computerSelection +" beats " + playerSelection);
        return 0;
    }else{
        console.log( "You Win! "+ playerSelection +" beats " + computerSelection);
        return 1;
    }
  }
   
  function game(){
    let gamesWon = 0;
    for(let i=0;i<5; i++){
        const playerSelection = capitalize(prompt("Rock,Paper,Scissors?"));
        const computerSelection = getComputerChoice();
        gamesWon += playRound(playerSelection, computerSelection);
    }

    console.log("You won " + gamesWon + " games!!!");
  }