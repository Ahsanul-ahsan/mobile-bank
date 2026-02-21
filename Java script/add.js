document.getElementById('add-money-btn').addEventListener('click', function(){
    const addMoneyBank = getValueFromInput('add-money-bank');
    if(addMoneyBank == 'Select a back'){
        alert('Please select a bank')
        return;
    }
    const addMoneyNumber = getValueFromInput('add-money-number');
    if(addMoneyNumber.length !== 11){
        alert('Invalid account number');
        return;
    }
    const amount = getValueFromInput('add-money-amount');
    const newBalance = getBalance() + Number(amount);
    const pin = getValueFromInput('add-money-pin');
    if(pin == '1234'){
        alert(`add money sucess from ${addMoneyBank} at ${new Date()}`);
        setBalance(newBalance);
        const history = document.getElementById('history-contaneair');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
         <div class="transaction bg-base-100 p-5 rounded-[10px]">
         add money sucess from ${addMoneyBank}, account number ${amount} at ${new Date()}
          </div>
        `
        history.append(newDiv);
    }
    else{
        alert('invalid pin');
        return;
    }
})