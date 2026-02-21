document.getElementById('transfer-btn').addEventListener('click', function(){
    const accountNumber = getValueFromInput('transfer-number');
    if(accountNumber.length !==11){
        alert('Invalid your account number');
        return;
    }
    const transferAmount = getValueFromInput('transfer-amount');
    const balance = getBalance();
    const newBalance = balance - Number(transferAmount);
    if (newBalance < 0) {
        alert('Invalid balance')
        return;
    }
    const transferPin = getValueFromInput('transfer-pin');
    if(transferPin == '1234'){
        alert('transfer secessfully');
        setBalance(newBalance);
         const history = document.getElementById('history-contaneair');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
         <div class="transaction bg-base-100 p-5 rounded-[10px]">
         transfer sucess to account number ${accountNumber} amount  ${transferAmount} at ${new Date()}
          </div>
        `
        history.append(newDiv);
    }
    else{
        alert('Invalid your pin number');
        return;
    }

})