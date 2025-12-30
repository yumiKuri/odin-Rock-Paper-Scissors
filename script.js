//console.log(getComputerChoice());
//console.log(getHumanChoice());
let humanScore = 0, computerScore = 0;
playGame();

function playGame(){
    let end = false;
    for(let i = 0; i < 5; i++){
        let com = getComputerChoice();
        let usr = getHumanChoice();
        if(usr === ''){
            console.log("Try again!");
            i--;
            continue;
        }
        if(!usr){
            console.log("Let's play next time!")
            end = true;
            break;
        }
        playRound(usr, com);
        console.log(`User Score: ${humanScore}\nBot Score: ${computerScore}`)
    }
    if(end) return;
    if(humanScore > computerScore) console.log('You Win!');
    else if(humanScore === computerScore) console.log("Draw");
    else console.log("You lose");
    return;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice) console.log('Draw');
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")){
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
    }
    else{
        computerScore++;
        console.log(`You lose! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} is beated by ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
    }
    return;
}

function getComputerChoice(){
    let choice = ['rock','paper','scissors'];
    let idx = Math.floor(Math.random() * 3);
    return choice[idx];
}

function getHumanChoice(){
    let ans = prompt("Rock Paper Scissors: ");
    if(!ans) return;
    else if(!['rock', 'paper', 'scissors'].includes(ans)){
        console.log('invalid input');
        return '';
    }
    else return ans.toLowerCase();
}
