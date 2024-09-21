document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    

    // const addMoney = document.getElementById('add-money-field').value;
    // const finalAddMoney = parseFloat(addMoney);

    // const pinNum = document.getElementById('pin-number').value;

    // if(pinNum === '1234'){
        
    //     const available = document.getElementById('main-balance').innerText;
    //     const finalAvail = parseFloat(available);

    //     const updateBalance = finalAvail + finalAddMoney;

    //     document.getElementById('main-balance').innerText = updateBalance;
    // }
    // else{
    //     alert('pin number is incorrect');
    // }



    const addMoney = inputFieldValueId('add-money-field');

    if(isNaN(addMoney)){
        alert('add money is not possible');
        return;
    }
    const pinNum = inputFieldValueId('pin-number');

    if(pinNum === 1234){
        const mainMoney = inputMainBalance('main-balance');

        const updateMoney = mainMoney + addMoney;

        document.getElementById('main-balance').innerText = updateMoney;


        const p = document.createElement('p');
        p.innerText = `added : ${addMoney}  newbalace : ${updateMoney}`

        document.getElementById('transaction-container').appendChild(p);
    }

    else{
        alert('wrong pin number')
    }
    

    
})