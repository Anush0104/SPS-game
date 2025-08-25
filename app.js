const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach(option => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        winner(this.innerText, computerChoice);

        if (moves === 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');

    const playerChoiceText = document.getElementById('player-choice');
    const computerChoiceText = document.getElementById('computer-choice');

    // Map choices with icons
    const choiceIcons = {
      rock: "🪨 Rock",
      paper: "📄 Paper",
      scissors: "✂️ Scissors"
    };

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    // Show choices
    playerChoiceText.textContent = `👤 Player: ${choiceIcons[player]}`;
    computerChoiceText.textContent = `💻 Computer: ${choiceIcons[computer]}`;

    if (player === computer) {
      result.textContent = 'Tie 🤝';
      result.style.color = "yellow";
    } else if (player === 'rock') {
      if (computer === 'paper') {
        result.textContent = 'Computer Won 🖥️';
        result.style.color = "red";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won 🎉';
        result.style.color = "lime";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === 'scissors') {
      if (computer === 'rock') {
        result.textContent = 'Computer Won 🖥️';
        result.style.color = "red";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won 🎉';
        result.style.color = "lime";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === 'paper') {
      if (computer === 'scissors') {
        result.textContent = 'Computer Won 🖥️';
        result.style.color = "red";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won 🎉';
        result.style.color = "lime";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const restartBtn = document.getElementById('popup-restart');

    playerOptions.forEach(option => {
      option.style.display = 'none';
    });

    chooseMove.innerText = 'Game Over!!';
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
      popupMessage.innerText = "🎉 You Won The Game!";
    } else if (playerScore < computerScore) {
      popupMessage.innerText = "😢 You Lost The Game!";
    } else {
      popupMessage.innerText = "😐 It's a Tie!";
    }

    popup.style.display = "flex";

    restartBtn.addEventListener('click', () => {
      window.location.reload();
    });
  };

  playGame();
};

game();
