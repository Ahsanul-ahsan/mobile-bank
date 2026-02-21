document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length !== 11) {
        alert('Invalid Acount number');
        return;
    }
    const cashoutAmount = getValueFromInput('cashout-amount');
    const correntBalance = getBalance();
    const newBalance = correntBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid amount balance')
        return;
    }
    const cashoutPin = getValueFromInput('cashout-pin');
    if (cashoutPin === '1234') {
        alert('Cashout secessfully');
        setBalance(newBalance);
        const history = document.getElementById('history-contaneair');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
         <div class="transaction bg-base-100 p-5 rounded-[10px]">
         cashout sucess to account number ${cashoutNumber} amount  ${cashoutAmount} at ${new Date()}
          </div>
        `
        history.append(newDiv);
    }
    else {
        alert('Invalid password');
        return;
    }
})