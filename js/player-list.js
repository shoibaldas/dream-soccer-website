document.getElementById('btn-player-messi').addEventListener('click', function () {
    const checkList = checkPlayerListById('player-list');

    if (checkList > 4) {
        alert("Only Five player can be selected!");
        return;
    }
    const getTitleName = getTextPlayerTitleById('messi-title');
    setPlayerInListById('player-list', getTitleName);
    document.getElementById('btn-player-messi').disabled = true;
    document.getElementById("btn-player-messi").style.backgroundColor = "lightblue";
})

document.getElementById('btn-player-neymar').addEventListener('click', function () {
    const checkList = checkPlayerListById('player-list');

    if (checkList > 4) {
        alert("Only Five player can be selected!");
        return;
    }
    const getTitleName = getTextPlayerTitleById('neymar-title');
    setPlayerInListById('player-list', getTitleName);
    document.getElementById('btn-player-neymar').disabled = true;
    document.getElementById("btn-player-neymar").style.backgroundColor = "lightblue";
})

document.getElementById('btn-player-bappe').addEventListener('click', function () {
    const checkList = checkPlayerListById('player-list');

    if (checkList > 4) {
        alert("Only Five player can be selected!");
        return;
    }
    const getTitleName = getTextPlayerTitleById('bappe-title');
    setPlayerInListById('player-list', getTitleName);
    document.getElementById('btn-player-bappe').disabled = true;
    document.getElementById("btn-player-bappe").style.backgroundColor = "lightblue";
})

document.getElementById('btn-player-vitor').addEventListener('click', function () {
    const checkList = checkPlayerListById('player-list');

    if (checkList > 4) {
        alert("Only Five player can be selected!");
        return;
    }
    const getTitleName = getTextPlayerTitleById('vitor-title');
    setPlayerInListById('player-list', getTitleName);
    document.getElementById('btn-player-vitor').disabled = true;
    document.getElementById("btn-player-vitor").style.backgroundColor = "lightblue";
})

document.getElementById('btn-player-ramos').addEventListener('click', function () {
    const checkList = checkPlayerListById('player-list');

    if (checkList > 4) {
        alert("Only Five player can be selected!");
        return;
    }
    const getTitleName = getTextPlayerTitleById('ramos-title');
    setPlayerInListById('player-list', getTitleName);
    document.getElementById('btn-player-ramos').disabled = true;
    document.getElementById("btn-player-ramos").style.backgroundColor = "lightblue";
})

document.getElementById('btn-player-renato').addEventListener('click', function () {
    const checkList = checkPlayerListById('player-list');

    if (checkList > 4) {
        alert("Only Five player can be selected!");
        return;
    }
    const getTitleName = getTextPlayerTitleById('renato-title');
    setPlayerInListById('player-list', getTitleName);
    document.getElementById('btn-player-renato').disabled = true;
    document.getElementById("btn-player-renato").style.backgroundColor = "lightblue";
})