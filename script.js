const BUTTON_CSS_CLASS = ".btn";
const TIP_CSS_CLASS = ".tip";
const TOTAL_CSS_CLASS = ".total";
const ERROR_CSS_CLASS = ".error";
const BILL_CSS_CLASS = ".bill";
const RATE_CSS_CLASS = ".rate";

const button = document.querySelector(BUTTON_CSS_CLASS);
const tip = document.querySelector(TIP_CSS_CLASS);
const total = document.querySelector(TOTAL_CSS_CLASS);
const error = document.querySelector(ERROR_CSS_CLASS);

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none";
    }, 3000);
}

const showError = () => {
    error.style.display = "block";
}

const calculateTip = () => {
    const bill = document.querySelector(BILL_CSS_CLASS).value;
    const rate = document.querySelector(RATE_CSS_CLASS).value;

    if (bill === "" || rate === "") {
        showError();
        hideError();
    } else if (isNaN(bill)) {
        error.innerHTML = "Please enter a number";
        showError();
        hideError();
    } else {
        let tipAmount = bill * rate;

        tipAmount = Math.ceil(tipAmount);
        tip.innerHTML = 'Tip: $' + tipAmount;

        let totalBill = Number(bill) + tipAmount;
        total.innerHTML = 'Total amount: $' + totalBill;
    }
}

button.addEventListener("click", calculateTip);