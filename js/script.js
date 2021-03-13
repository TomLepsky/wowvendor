let clicked = false;
let currentCharacter;
let currentTerrain;

document.addEventListener("DOMContentLoaded", function () {
    addEventListener("click", function () {
        if (!clicked) {
            clicked = true;
            bot();
        }
    });
});

function bot() {
    let isJumped = false;
    let jumpPosition;
    currentCharacter = character;
    currentTerrain = terrain;
    currentCharacter.run();
    let time = performance.now();
    let timerId = setInterval(function () {
        if (!isJumped && isReadyToJump()) {
            jumpPosition = currentCharacter.characterPosition;
            currentCharacter.jump();
            isJumped = true;
        }
        if (isFinished()) {
            clearTimeout(timerId);
            time -= performance.now();
            time = Math.abs(Math.floor(time / 100) / 10);
            sendData({rockPosition: currentTerrain.rockPosition, rockSize: currentTerrain.rockSize, jumpPosition: jumpPosition, time: time, result: currentCharacter.isWin ? 1:0});
            clicked = false;
        }
    }, 5);

}

function isFinished() {
    return currentCharacter.isWin || (currentCharacter !== character);
}

function isReadyToJump() {
    let delta = Math.floor(Math.random() * 100);
    return (terrain.rockPosition - terrain.rockSize) - character.characterPosition <= delta;
}

function sendData(data) {console.log(data);
    let request = new XMLHttpRequest();
    request.open('POST', 'upload.php');
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = 'data=' + JSON.stringify(data);
    request.send(data);

    request.onload = function() {
        if (request.status === 200) {
            //let requestData = JSON.parse(request.response);
            console.log(request.response);
        } else if (request.status === 400) {
            let requestData = JSON.parse(request.response);
            alert(requestData);
        } else {
            console.log(`Ошибка ${request.status}: ${request.statusText}`);
        }
    };

    request.onerror = function () {
        console.log("Запрос не удался, возможно не тот url");
    };
}



