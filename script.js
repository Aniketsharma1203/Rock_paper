const div = document.createElement("div");
  document.body.appendChild(div);

  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');

  div.appendChild(btn1);
  div.appendChild(btn2);
  div.appendChild(btn3);

  function getComputerChoice(){
    let choice = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
  }

  function playRound(playerSelection){
      let computerSelection = getComputerChoice();
      div.textContent = "Player Selected: " + playerSelection + ", Computer Selected: " + computerSelection;
      if(playerSelection === "Rock" && computerSelection === "Paper"){
        div.textContent += " - You Lose! Paper beats Rock";
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        div.textContent += " - You Lose! Scissors beats Paper";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        div.textContent += " - You Lose! Rock beats Scissors";
    }
    else if (playerSelection === computerSelection) {
        div.textContent += " - It's a tie!";
    }
    else{
        div.textContent += " - You Won!";
    }
  }

  btn1.textContent = "Rock";
  btn2.textContent = "Paper";
  btn3.textContent = "Scissors";

  btn1.addEventListener('click', function(){
      playRound("Rock");
  });

  btn2.addEventListener('click', function() {
      playRound("Paper");
  });

  btn3.addEventListener('click', function(){
      playRound("Scissors");
  });
