const calculateAreaBtn = document.querySelector("#calculate-area");
const inputs = document.querySelectorAll(".input");
const outputEl = document.querySelector(".area-output")

calculateAreaBtn.addEventListener("click", calculateArea);
console.log(calculateAreaBtn);

function calculateAns(a,b){
  const area = (a*b) / 2;
  return area;
}

function calculateArea(){
  const area = calculateAns(inputs[0].value, inputs[1].value);
  outputEl.innerHTML = "Area is: " + area.toFixed(2);
  
}