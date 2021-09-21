const calculateHypoBtn = document.querySelector("#calculate");
const sides = document.querySelectorAll(".side-input");
const output = document.querySelector(".hypo-output")

calculateHypoBtn.addEventListener("click", calculateHypotenuse);

function calculateSumOfSquares(a,b){
  const sumOfSquares = a*a + b*b;
  return sumOfSquares;
}

function calculateHypotenuse(){
  const sumOfSquares =  calculateSumOfSquares(sides[0].value, sides[1].value);
  const hypo =(Math.sqrt(sumOfSquares));
  output.innerHTML = "Hypotenuse is: " + hypo.toFixed(2);
  
}