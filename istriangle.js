const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const trianglebtn = document.querySelector("#btn");
const output = document.querySelector(".output");

trianglebtn.addEventListener("click", isTraingle);

function isTraingle(){
  const angleOne = Number(angle1.value);
  const angleTwo = Number(angle2.value);
  const angleThree = Number(angle3.value);

  const sum = angleOne + angleTwo + angleThree;
  console.log(sum);

  if (sum == 180) {
    output.innerHTML = "Great!It's a Triangle";    
  } else {
    output.innerHTML = "It's not a Triangle";
    
  }

}