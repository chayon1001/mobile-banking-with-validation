document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    
    const cashOut = inputFieldValueId('cash-out-field');

    if(isNaN(cashOut)){
        alert('amout is invalid');
        return;
    }
    const cashOutPin = inputFieldValueId('cash-out-pin-number')

    if(cashOutPin === 1234){

        const amount = inputMainBalance('main-balance');

        if(cashOut > amount){
            alert('amount is not available');
            return;
        }

        const finalAmount = amount - cashOut;

        document.getElementById('main-balance').innerText = finalAmount;


        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash out </h4>
            <p> ${cashOut} main balance : ${finalAmount}
        `

        document.getElementById('transaction-container').appendChild(div)

    }
    else{
        alert('wrong pin number');
    }

    console.log(cashOut, cashOutPin)
})