
function inputFieldValueId(id){
    const addMoney = document.getElementById(id).value;

    const convertAddMoney = parseFloat(addMoney);
    return convertAddMoney;
};

function inputMainBalance(id){
    const inputMoney = document.getElementById(id).innerText;
    const convertInputMoney = parseFloat(inputMoney);
    return convertInputMoney;
};

function showSection(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-part').classList.add('hidden');

    
    document.getElementById(id).classList.remove('hidden');
}