function getValueFromInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
function getBalance(){
    const balanceInput = document.getElementById('balance');
    const balance = balanceInput.innerText;
    console.log('current balance', Number(balance));
    return Number(balance);
}
function setBalance (value){
    const balanceInput = document.getElementById('balance');
    balanceInput.innerText= value;
} 

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transaction = document.getElementById('history');
    const transfer = document.getElementById('transfer-money');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transaction.classList.add('hidden');
    transfer.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
    
}