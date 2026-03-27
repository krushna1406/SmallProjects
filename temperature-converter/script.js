const textBox = document.getElementById("text-box");
const result = document.querySelector(".result");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius= document.getElementById("toCelcius");
const submitBtn = document.querySelector("button");

let temp;

submitBtn.addEventListener("click", () => {
    if(toFahrenheit.checked) {
      temp = Number(textBox.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + "°F";
   }
   else if(toCelcius.checked) {
      temp = Number(textBox.value);
      temp = temp * 5 / 9 - 32;
      result.textContent = temp.toFixed(1) + "°C";
   }
   else {
      result.textContent = "Select a unit";
   }
});