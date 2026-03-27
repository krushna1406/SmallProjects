const counter = document.querySelector(".count-label");
const decreaseBtn = document.querySelector(".decrease-btn");
const increaseBtn = document.querySelector(".increase-btn");
const resetBtn = document.querySelector(".reset-btn");
let count =0;

increaseBtn.addEventListener("click", () => {
   count++;
   counter.textContent = count;
});

decreaseBtn.addEventListener("click", ()=> {
   count--;
   counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
   count = 0;
   counter.textContent = count;
});