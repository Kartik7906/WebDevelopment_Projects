let rules_btn = document.querySelector("#btn-for-rules");
let rules_hide_div = document.querySelector(".hide");
let cross_btn = document.querySelector("#cross-btn");

// btn for rock paper scissor
let rock_btn = document.querySelector("#Rock");
let paper_btn = document.querySelector("#Paper");
let scissor_btn = document.querySelector("#Scissor");

let first_choice_div = document.querySelector("#first");
let second_choice_div = document.querySelector("#second");
let start_game_div = document.querySelector(".startgame");
let optionsection_div = document.querySelector(".optionsection");

// selecting status
let status1 = document.querySelector(".status1");
let status2 = document.querySelector(".status2");

// selecting score buttons
let user_score = document.querySelector("#user-score");
let pc_score = document.querySelector("#pc-score");

// selecting next button
let next_button = document.querySelector(".btn-hidden");

// play again button
let play_btn = document.querySelector(".play-again-btn");

let first_span = document.querySelector(".first-span");
let second_span = document.querySelector(".second-span");

let user_count = 0;
let pc_count = 0;

// Function to handle score increment for user and save to localStorage
function count() {
  user_count++;
  user_score.innerText = user_count;
  localStorage.setItem("userScore", user_count); // Save to localStorage
}

// Function to handle score increment for pc and save to localStorage
function count2() {
  pc_count++;
  pc_score.innerText = pc_count;
  localStorage.setItem("pcScore", pc_count); // Save to localStorage
}

// Load scores from localStorage when the page loads
function loadScores() {
  user_count = localStorage.getItem("userScore")
    ? parseInt(localStorage.getItem("userScore"))
    : 0;
  pc_count = localStorage.getItem("pcScore")
    ? parseInt(localStorage.getItem("pcScore"))
    : 0;

  // Update score display
  user_score.innerText = user_count;
  pc_score.innerText = pc_count;
}

let flag = true;
// Event for the play again button
play_btn.addEventListener("click", () => {
  optionsection_div.style.display = "block";
  start_game_div.style.display = "none";
  if (flag == false) {
    user_count = 0;
    pc_count = 0;
    user_score.innerText = user_count;
    pc_score.innerText = pc_count;
    flag = true;
  }
  play_btn.innerText = "PLAY AGAIN";
});



// Code for showing/hiding rules
rules_btn.addEventListener("click", () => {
  rules_hide_div.style.display = "block";
});
cross_btn.addEventListener("click", () => {
  rules_hide_div.style.display = "none";
});

// Event listener for Rock button
rock_btn.addEventListener("click", () => {
  let res = random_choose("rock");
  optionsection_div.style.display = "none";
  start_game_div.style.display = "block";

  // Update second choice display
  if (result == "rock") {
    second_choice_div.style.backgroundImage = "url('./images/rock.jpeg')";
    second_choice_div.style.border = "28px solid #0074B6";
  } else if (result == "paper") {
    second_choice_div.style.backgroundImage = "url('./images/paper.jpeg')";
    second_choice_div.style.border = "28px solid #FFA943";
  } else {
    second_choice_div.style.backgroundImage = "url('./images/scissor.jpeg')";
    second_choice_div.style.border = "28px solid #BD00FF";
  }

  first_choice_div.style.backgroundImage = "url('./images/rock.jpeg')";
  first_choice_div.style.border = "28px solid #0074B6";

  if (res === "tie") {
    status1.innerText = "TIE UP";
    status2.style.display = "none";
    play_btn.innerHTML = "REPLAY";
    flag = false;
    next_button.style.display = "none";
    first_span.style.display = "none"
    second_span.style.display = "none";
  } else if (res === "user win") {
    count();
    first_span.style.display = "block";
    second_span.style.display = "none";
    status1.innerText = "YOU WIN";
    status2.style.display = "block";
    next_button.style.display = "block";
  } else if (res === "pc win") {
    count2();
    first_span.style.display = "none";
    second_span.style.display = "block";
    status1.innerText = "YOU LOST";
    status2.style.display = "block";
    next_button.style.display = "none";
  }
});

// Event listener for Paper button
paper_btn.addEventListener("click", () => {
  let res = random_choose("paper");
  optionsection_div.style.display = "none";
  start_game_div.style.display = "block";

  // Update second choice display
  if (result == "rock") {
    second_choice_div.style.backgroundImage = "url('./images/rock.jpeg')";
    second_choice_div.style.border = "28px solid #0074B6";
  } else if (result == "paper") {
    second_choice_div.style.backgroundImage = "url('./images/paper.jpeg')";
    second_choice_div.style.border = "28px solid #FFA943";
  } else {
    second_choice_div.style.backgroundImage = "url('./images/scissor.jpeg')";
    second_choice_div.style.border = "28px solid #BD00FF";
  }

  first_choice_div.style.backgroundImage = "url('./images/paper.jpeg')";
  first_choice_div.style.border = "28px solid #FFA943";

  if (res === "tie") {
    status1.innerText = "TIE UP";
    status2.style.display = "none";
    play_btn.innerHTML = "REPLAY";
    flag = false;
    next_button.style.display = "none";
    first_span.style.display = "none"
    second_span.style.display = "none";
  } else if (res === "user win") {
    count();
    first_span.style.display = "block";
    second_span.style.display = "none";
    status1.innerText = "YOU WIN";
    status2.style.display = "block";
    next_button.style.display = "block";
  } else if (res === "pc win") {
    count2();
    first_span.style.display = "none";
    second_span.style.display = "block";
    status1.innerText = "YOU LOST";
    status2.style.display = "block";
    next_button.style.display = "none";
  }
});

// Event listener for Scissor button
scissor_btn.addEventListener("click", () => {
  let res = random_choose("scissor");
  optionsection_div.style.display = "none";
  start_game_div.style.display = "block";

  // Update second choice display
  if (result == "rock") {
    second_choice_div.style.backgroundImage = "url('./images/rock.jpeg')";
    second_choice_div.style.border = "28px solid #0074B6";
  } else if (result == "paper") {
    second_choice_div.style.backgroundImage = "url('./images/paper.jpeg')";
    second_choice_div.style.border = "28px solid #FFA943";
  } else {
    second_choice_div.style.backgroundImage = "url('./images/scissor.jpeg')";
    second_choice_div.style.border = "28px solid #BD00FF";
  }

  first_choice_div.style.backgroundImage = "url('./images/scissor.jpeg')";
  first_choice_div.style.border = "28px solid #BD00FF";

  if (res === "tie") {
    status1.innerText = "TIE UP";
    status2.style.display = "none";
    play_btn.innerHTML = "REPLAY";
    flag = false;
    next_button.style.display = "none";
    first_span.style.display = "none"
    second_span.style.display = "none";
  } else if (res === "user win") {
    count();
    status1.innerText = "YOU WIN";
    status2.style.display = "block";
    next_button.style.display = "block";
    first_span.style.display = "block";
    second_span.style.display = "none";
  } else if (res === "pc win") {
    count2();
    first_span.style.display = "none"
    second_span.style.display = "block";
    status1.innerText = "YOU LOST";
    status2.style.display = "block";
    next_button.style.display = "none";
  }
});

// Random choice generator function
let arr = ["rock", "paper", "scissor"];
let result = "";

function random_choose(user_pic) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  result = arr[randomIndex];

  if (result === user_pic) {
    return "tie";
  } else if (
    (user_pic === "rock" && result === "scissor") ||
    (user_pic === "scissor" && result === "paper") ||
    (user_pic === "paper" && result === "rock")
  ) {
    return "user win";
  } else {
    return "pc win";
  }
}

// Load scores when the page loads
window.onload = loadScores;

function saveScores() {
  console.log(`User: ${user_count}, PC: ${pc_count}`);
}