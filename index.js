const inputHours = document.getElementById("hours-worked"); //take in the input from the user
const submitBtn = document.getElementById("submit");
const wageInfo = document.querySelector(".wage-info"); //t
const addedWageInfo = document.querySelector(".added-wage-info");
const totalDailyWageInfo = document.querySelector(".total-wage-info");
const normalWage = document.querySelector("#normal-wage"); //this will  contain the normal wage value
const extraWage = document.querySelector("#extra-wage"); //this will contain the extra income earned
const totalWage = document.querySelector("#total-wage"); //this will contain the sum of the normal wage and extra wage

//let input = Number(inputHours.value);
//console.log(input, submitBtn, normalWage, extraWage, totalWage);

let calcNormalWage, calcAddedWage, additionalinputHours, total;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let input = Number(inputHours.value);
  if (0 < input && input <= 4) {
    calcNormalWage = input * 1000;

    wageInfo.style.display = "block";
    addedWageInfo.style.display = "block";
    totalDailyWageInfo.style.display = "block";

    normalWage.textContent = calcNormalWage; //this returns the normal wage to the dom
    extraWage.textContent = 0;
    totalWage.textContent = calcNormalWage;
  } else if (4 < input && input <= 24) {
    let additionalinputHours = input - 4; //this returns the additional extra hrs worked
    calcAddedWage = additionalinputHours * 200 + additionalinputHours * 1000; //this returns the income earned for every extra hrs worked
    calcNormalWage = 4 * 1000; //this returns the regular wage
    total = calcNormalWage + calcAddedWage; //this returns the total

    wageInfo.style.display = "block";
    addedWageInfo.style.display = "block";
    totalDailyWageInfo.style.display = "block";

    normalWage.textContent = calcNormalWage;
    extraWage.textContent = calcAddedWage;
    totalWage.textContent = total;
  } else {
    alert("Sorry you entered an incorrect value .Please enter a VALID number");
  }
});
