const inputHours = document.getElementById("hours-worked");
const submitBtn = document.getElementById("submit");
const wage = document.querySelector(".wage");
const addedWage = document.querySelector(".added-wage");
const totalDailyWage = document.querySelector(".total-wage");
const normalWage = document.querySelector("#normal-wage");
const extraWage = document.querySelector("#extra-wage");
const totalWage = document.querySelector("#total-wage");

//let input = Number(inputHours.value);
//console.log(input, submitBtn, normalWage, extraWage, totalWage);

let calcNormalWage, calcAddedWage, additionalinputHours, total;
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let input = Number(inputHours.value);
  if (0 < input && input <= 4) {
    calcNormalWage = input * 1000;
    wage.style.display = "block";
    normalWage.textContent = calcNormalWage;
    console.log(calcNormalWage);
  } else if (4 < input && input <= 24) {
    let additionalinputHours = input - 4;
    calcAddedWage = additionalinputHours * 200 + additionalinputHours * 1000;
    calcNormalWage = 4 * 1000;
    total = calcNormalWage + calcAddedWage;

    wage.style.display = "block";
    addedWage.style.display = "block";
    totalDailyWage.style.display = "block";
    normalWage.textContent = calcNormalWage;
    extraWage.textContent = calcAddedWage;
    totalWage.textContent = total;
    console.log(calcAddedWage, calcNormalWage, total);
  } else {
    alert(
      "Sorry you entered an incorrect value .Please enter a number between 1 and 24"
    );
  }
});
