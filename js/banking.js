// get input value by id
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputText = inputField.value;
  const inputAmount = parseFloat(inputText);
  // clear input field
  inputField.value = "";
  return inputAmount;
}

function updateTotalField(fieldId, amount) {
  const totalElement = document.getElementById(fieldId);
  const totalText = totalElement.innerText;
  const previousAmount = parseFloat(totalText);
  totalElement.innerText = previousAmount + amount;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance_total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

// add even handle deposit button
document.getElementById("deposit_btn").addEventListener("click", function () {
  const newDepositAmount = getInputValue("deposit_amount");
  if (newDepositAmount > 0) {
    updateTotalField("deposit_total", newDepositAmount);
    updateBalance(newDepositAmount, true);
  } else {
    alert("Please enter a valid number");
  }
});

// add even handle withdraw button
document.getElementById("withdraw_btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputValue("withdraw_amount");
  if (newWithdrawAmount > 0) {
    updateTotalField("withdraw_total", newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
  } else {
    alert("Please enter a valid number");
  }
});
