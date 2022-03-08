// alert("are you ready to play game?")
let myGame = document.getElementById("my-game");
let ctx = myGame.getContext("2d");
let player = document.getElementById("figures2")
let eagle = document.getElementById("eagle")
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

function keyPressed(event) {
    //get the actuall key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "key down code: " + key;

    //make player stop
    if (key === 37) {
        playerXDir = -1;
    } else if (key === 39) {
        playerXDir = 1;
    } else if (key === 38) {
        playerYDir = -1;
    } else if (key === 40) {
        playerYDir = 1;
    }
}

function keyReleased(event) {
    //get the actuall key pressed
    let key = event.keyCode;
    keyupOutput.innerHTML = "key up code: " + key;

    //move player
    if (key === 37) {
        playerXDir = 0;
    } else if (key === 39) {
        playerXDir = 0;
    } else if (key === 38) {
        playerYDir = 0;
    } else if (key === 40) {
        playerYDir = 0;
    }
}

let playerX = 30;
let playerY = 360;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 2;
let eagleX = 90;
let eagleY = 90;
let eaglexDir = 1;
let eagleyDir = 1;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

const IMG_WIDTH = 100;
const IMG_HEIGHT = 90;
const EAGLEIMG_WIDTH = 90;
const EAGLEIMG_HEIGHT = 60;


function drawImage() {
    ctx.drawImage(player, playerX, playerY, IMG_HEIGHT, IMG_WIDTH);

}

function drawEagle() {
    ctx.drawImage(eagle, eagleX, eagleY, EAGLEIMG_HEIGHT, EAGLEIMG_WIDTH);
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);
    playerY += (playerSpeed * playerYDir);
    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 1250 - PADDLE_WIDTH) {
        playerX = 1250 - PADDLE_WIDTH;
    } else if (playerY > 390 - PADDLE_HEIGHT) {
        playerY = 390 - PADDLE_HEIGHT;
    } else if (player <= 0) {
        playerXDir = 1;
    } else if (playerY <= 0) {
        playerYDir = 1;
    }

}

function moveEagle() {
    eagleX += 5 * eaglexDir;
    eagleY += 5 * eagleyDir;
    // check for walls
    if (eagleY + EAGLEIMG_HEIGHT > 500) {
        eagleyDir = -1;
    } else if (eagleX + EAGLEIMG_WIDTH > 1250) {
        eaglexDir = -1;
    } else if (eagleY <= 0) {
        eagleyDir = 1;
    } else if (eagleX <= 0) {
        eaglexDir = 1;
    }
}

function checkEagleCollision() {
    if ((eagleY > 1250 - EAGLEIMG_HEIGHT) || (eagleY < 0 + EAGLEIMG_HEIGHT)) {
        eagleyDir = eagleyDir * -1;
    } else if ((eagleX > 1250 - EAGLEIMG_HEIGHT) || (eagleX < 0 + EAGLEIMG_HEIGHT)) {
        eaglexDir = eaglexDir * -1;
    }
    //check to see if it hit the paddle
    if (eagleX + EAGLEIMG_HEIGHT >= playerX &&
        eagleX - EAGLEIMG_WIDTH <= playerX &&
        eagleY + EAGLEIMG_HEIGHT >= playerY &&
        eagleY - EAGLEIMG_WIDTH <= playerY) {
        eagleyDir = eagleyDir * -1.01;
        let play = prompt("game over! would you like to play again? type yes or no!")
        if (play == "yes") {
            playerX = -200;
            playerY = 150;
            eagleX = 90;
            eagleY = 90;
        } else if (play == "no") {
            alert("Game over")
        }

    }
}


function refreshUI() {
    ctx.clearRect(0, 0, 1250, 1250);
    movePlayer();
    drawImage();
    moveEagle();
    drawEagle();
    checkEagleCollision();

}

setInterval(refreshUI, 10);