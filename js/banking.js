function getInputValue(inputId, currentAmountId, isAdd){
    const inputField = document.getElementById(inputId);
    const newAmountText = inputField.value;
    const newAmountNumber = parseFloat(newAmountText);    
    inputField.value = '';

    // update deposit or withdraw
    const currentAmount = document.getElementById(currentAmountId); 
    const currentAmountText = currentAmount.innerText;
    const currentAmountNumber = parseFloat(currentAmountText);
    currentAmount.innerText = newAmountNumber + currentAmountNumber;

    // update total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);
    if (isAdd == true){
        totalBalance.innerText = totalBalanceNumber + newAmountNumber;
    }
    else {
        totalBalance.innerText = totalBalanceNumber - newAmountNumber;
    }
    
}
// set deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    getInputValue('new-deposit', 'current-deposit', true);        
})

//set withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    getInputValue('new-withdraw', 'current-withdraw', false);
     
})
