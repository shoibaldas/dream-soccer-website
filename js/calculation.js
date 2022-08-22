document.getElementById('btn-calculate-player-cost').addEventListener('click', function () {

    const checkList = document.getElementById('player-list').innerText;
    const checkPlayerInputField = document.getElementById('per-player-cost').value;
    if (checkList == "") {
        alert("Select Player First!");
    }
    else if (checkPlayerInputField == "") {
        document.getElementById("per-player-cost").style.borderColor = "red";
    }
    else if (isNaN(checkPlayerInputField)) {
        alert('Enter money amount for player in number!');
    }
    else {
        document.getElementById("per-player-cost").style.borderColor = "green";
        const currentPlayerExpense = getInputFieldValueById('per-player-cost');
        const playerList = checkPlayerListById('player-list');
        const newPlayerrExpenses = currentPlayerExpense * playerList;
        setTextElementValueById('player-expenses-total', newPlayerrExpenses);
    }
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const checkList = document.getElementById('player-list').innerText;
    const checkPlayerInputField = document.getElementById('per-player-cost').value;
    const checkManagerInputField = document.getElementById('manager-cost').value;
    const checkCoachInputField = document.getElementById('coach-cost').value;

    if (checkList == "") {
        alert("Select Player First!");
    }
    else if (checkPlayerInputField == "") {
        document.getElementById("per-player-cost").style.borderColor = "red";
    }
    else if (checkManagerInputField == "") {
        document.getElementById("manager-cost").style.borderColor = "red";
    }
    else if (checkCoachInputField == "") {
        document.getElementById("coach-cost").style.borderColor = "red";
    }
    else if (isNaN(checkManagerInputField)) {
        alert('Enter money amount for manager in number!');
    }
    else if (isNaN(checkCoachInputField)) {
        alert('Enter money amount for coach in number!');
    }
    else {
        document.getElementById("per-player-cost").style.borderColor = "green";
        document.getElementById("manager-cost").style.borderColor = "green";
        document.getElementById("coach-cost").style.borderColor = "green";

        const playerExpenseTotal = getTextElementValueById('player-expenses-total');
        const managerCost = getInputFieldValueById('manager-cost');
        const coachCost = getInputFieldValueById('coach-cost');
        const costTotal = playerExpenseTotal + managerCost + coachCost;
        setTextElementValueById('cost-total', costTotal);
    }
})