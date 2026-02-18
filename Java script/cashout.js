   document.getElementById('cashout-btn').addEventListener('click', function () {
    // 1. get the input number 
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length !== 11) {
        alert('Invalid Acount number');
        return;
    }
    // 2. get the acount number
    const cashoutAmount = getValueFromInput('cashout-amount');
    // 3. get the balance 
    const balanceInput = document.getElementById('balance');
    const balance = balanceInput.innerText;
    // 4. get the new balance 
    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid amount balance')
        return;
    }
    const cashoutPin = getValueFromInput('cashout-pin');
    if (cashoutPin === '1234') {
        alert('Cashout secessfully');
        balanceInput.innerText = newBalance;
    }
    else {
        alert('Invalid password');
        return;
    }
})