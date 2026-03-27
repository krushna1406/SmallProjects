const rollDiceBtn = document.querySelector("button");

rollDiceBtn.addEventListener("click", () => {
   const diceResult = document.getElementById("dice-result");
   const diceImages = document.getElementById("dice-images");
   const input = document.getElementById("rollDice").value;

   const values = [];
   const images = [];

   for(let i=0; i< input; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="images/${value}.png" alt="Dice- ${value}">`);
   }
   diceResult.textContent = `Dice Result: ${values.join(", ")}`;
   diceImages.innerHTML = images.join("");
});