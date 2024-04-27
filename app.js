let inputForm = document.querySelector("#tableForm");
let input = document.querySelector("#inputID");
let table = document.querySelector(".time-table");



inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;

  table.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    //   console.log(tableOf + " x " + i + " =", tableOf * i);
    const message = `${tableOf} X ${i} = ${tableOf * i}`;

    table.innerHTML += `${message} <br>`;
  }
});
