
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);

    return inputFieldValue;

}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textValue = parseFloat(textElementValueString);

    return textValue;

}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

document.getElementById('btn-calculate-player-cost').addEventListener('click', function () {
    const currentPlayerExpense = getInputFieldValueById('per-player-cost');

    const newPlayerrExpenses = (currentPlayerExpense) * 5;

    setTextElementValueById('player-expenses-total', newPlayerrExpenses);
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playerExpenseTotal = getTextElementValueById('player-expenses-total');
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');

    const costTotal = playerExpenseTotal + managerCost + coachCost;

    setTextElementValueById('cost-total', costTotal);
})