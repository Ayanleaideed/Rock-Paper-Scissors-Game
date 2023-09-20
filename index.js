const scores = {
  wins: 0,
  loss: 0,
  tie: 0,
};

function playGame(params) {
  const userChoice = getMeaning(params);
  const computerChoice = computer();
  console.log(computerChoice);
  console.log(userChoice);
  const result = Game(userChoice, computerChoice);
  console.log(result);
  document.getElementById("scores").innerText = result;
  document.getElementById("board").innerText = `Wins: ${scores.wins}, Losses: ${scores.loss}, Ties: ${scores.tie}`;
}

function computer() {
  const list = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function Game(user, computerValue) {
  if (user === computerValue) {
    scores.tie++;
    return "Tie";
  } else if (user === 'rock' && computerValue === 'scissors') {
    scores.wins++;
    return "You have Won";
  } else if (user === 'rock' && computerValue === 'paper') {
    scores.loss++;
    return "You have Lost";
  } else if (user === 'scissors' && computerValue === 'paper') {
    scores.wins++;
    return "You have Won";
  } else if (user === 'scissors' && computerValue === 'rock') {
    scores.loss++;
    return "You have Lost";
  } else if (user === 'paper' && computerValue === "scissors") {
    scores.loss++;
    return "You have Lost";
  } else if (user === 'paper' && computerValue === "rock") {
    scores.wins++;
    return "You have Won";
  }
}
function reset(){
  scores.wins = 0;
  scores.loss = 0;
  scores.tie= 0;
  document.getElementById("board").innerText = `Wins: ${scores.wins}, Losses: ${scores.loss}, Ties: ${scores.tie}`;
  document.getElementById("scores").innerText = "";
  if(document.getElementById("run").innerText === "Stop"){
    document.getElementById("run").click()
  }
}

function getMeaning(params) {
  if (params === '✊') {
    return 'rock';
  } else if (params === '✋') {
    return 'paper';
  } else if (params === '✌️') {
    return 'scissors';
  }
}

// JavaScript function to click the button multiple times with await
async function clickButton50Times() {
  const button = document.getElementById('Paper');

  if (document.getElementById("run").innerText === "Automatic") {
    document.getElementById("run").innerText = "Stop";

    for (let i = 0; i < 50; i++) {
      button.click();
      await new Promise((resolve) => setTimeout(resolve, 110)); // Wait for 110 milliseconds (0.11 seconds) between clicks

      if (document.getElementById("run").innerText === "Automatic") {
        document.getElementById("run").innerText = "Automatic";
        break; // Stop the loop if the status changes to "Run"
      }
    }
    document.getElementById("run").innerText = "Automatic"; // Set the status back to "Run" after the loop completes
  } else {
    document.getElementById("run").innerText = "Automatic"; // Set the status back to "Run" if it's already "Stop"
  }
}
