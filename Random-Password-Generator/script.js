const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");
const generateBtn = document.getElementById("generate");
const refreshBtn = document.getElementById("refresh");
const input = document.getElementById("text-box");
const result = document.querySelector(".password");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
   const length = input.value;

   const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
   const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const symbolChar = "!@#$%^&*()_+=-~";
   const numberChar = "0123456789";

   let allowLower = false;
   let allowUpper = false;
   let allowSymbol = false;
   let allowNumbers = false;

   if (lowercase.checked) {
      allowLower = true;
   }
   if (uppercase.checked) {
      allowUpper = true;
   }
   if (symbols.checked) {
      allowSymbol = true;
   }
   if (numbers.checked) {
      allowNumbers = true;
   }

   if (length === "") {
      result.textContent = `Specify the length of password`;
   } 
   else if (!allowLower && !allowUpper && !allowSymbol && !allowNumbers) {
      result.textContent = `Select at least one option`;
   }
   else {
      let allowedChars = "";
      let password = "";

      for (let i = 0; i < length; i++) {

         allowedChars += allowLower ? lowerCaseChar : "";
         allowedChars += allowUpper ? upperCaseChar : "";
         allowedChars += allowSymbol ? symbolChar : "";
         allowedChars += allowNumbers ? numberChar : "";

         let charIndex = Math.floor(Math.random() * allowedChars.length);

         password += allowedChars[charIndex];
      }
      result.innerHTML = `Generated Password: <br> <span>${password}</span>`;
   }
}

refreshBtn.addEventListener("click", () => {
   result.innerHTML = "";
});