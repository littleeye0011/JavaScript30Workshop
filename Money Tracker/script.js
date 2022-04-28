const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const btn_income = document.getElementById("btn-income");
const btn_expense = document.getElementById("btn-expense");

let transaction = [];

function init() {
  list.innerHTML = "";
  transaction.forEach(addDataToList);
  calculateMoney();
}

function removeData(id) {
  transaction = transaction.filter((transaction) => transaction.id !== id);
  init();
}

function addDataToList(transaction) {
  const symbol = transaction.amount < 0 ? "-" : "+";
  const status = transaction.amount < 0 ? "minus" : "plus";
  const item = document.createElement("li");
  const result = formatNumber(Math.abs(transaction.amount));
  item.classList.add(status);
  item.innerHTML = `${transaction.text}<span>${symbol}${result}</span><button class="delete-btn" onclick="removeData(${transaction.id})">X</button> `;
  list.appendChild(item);
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function autoID() {
  return Math.floor(Math.random() * 1000000);
}

function calculateMoney() {
  const amounts = transaction.map((transaction) => transaction.amount);
  const total = amounts.reduce((result, item) => (result += item), 0);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((result, item) => (result += item), 0);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((result, item) => (result += item), 0);
  balance.innerText = "฿" + formatNumber(total);
  money_plus.innerText = "฿" + formatNumber(income);
  money_minus.innerText = "฿" + formatNumber(expense * -1);
}
function addTransactionPlus(e) {
  e.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("ป้อนข้อมูลให้ครบ");
  } else {
    const data = {
      id: autoID(),
      text: text.value,
      amount: +amount.value,
    };

    transaction.push(data);
    addDataToList(data);
    calculateMoney();
    text.value = "";
    amount.value = "";
  }
}
function addTransactionMinus(e) {
  e.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("ป้อนข้อมูลให้ครบ");
  } else {
    const data = {
      id: autoID(),
      text: text.value,
      amount: amount.value * -1,
    };

    transaction.push(data);
    addDataToList(data);
    calculateMoney();
    text.value = "";
    amount.value = "";
  }
}

btn_income.addEventListener("click", addTransactionPlus);
btn_expense.addEventListener("click", addTransactionMinus);
init();
