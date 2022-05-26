// Php circular progress_bar
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 75) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 23);

let expense_number = document.getElementById("expenseNumber");
let counterExpense = 0;
setInterval(() => {
  if (counterExpense == 65) {
    clearInterval();
  } else {
    counterExpense += 1;
    expenseNumber.innerHTML = counterExpense + "%";
  }
}, 25);

let income_number = document.getElementById("incomeNumber");
let counterIncome = 0;
setInterval(() => {
  if (counterIncome == 80) {
    clearInterval();
  } else {
    counterIncome += 1;
    incomeNumber.innerHTML = counterIncome + "%";
  }
}, 20);
