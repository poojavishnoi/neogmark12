const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");
const quizForm = document.querySelector(".quiz-form");

const correctAns = ["90°", "right-angled"];

function calculateScore(event){
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for(let value of formResults.values()){
    console.log(value);
    if(value === correctAns[index]){
      score =score + 1;

    }
    index = index + 1;
  }
  console.log(score);
  event.preventDefault();
  output.innerHTML = "Your score is: " + score;
}

submitBtn.addEventListener("click", calculateScore);