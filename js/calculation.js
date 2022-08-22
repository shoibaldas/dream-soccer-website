document.getElementById('btn-calculate-player-cost').addEventListener('click', function () {
    const currentPlayerExpense = getInputFieldValueById('per-player-cost');
    const playerList = checkPlayerListById('player-list');

    const newPlayerrExpenses = currentPlayerExpense * playerList;

    setTextElementValueById('player-expenses-total', newPlayerrExpenses);
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playerExpenseTotal = getTextElementValueById('player-expenses-total');
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');

    const costTotal = playerExpenseTotal + managerCost + coachCost;

    setTextElementValueById('cost-total', costTotal);
})