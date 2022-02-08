let myCamvas = document.getElementById("my-canvas");
let ctx = myCamvas.getContext("2d");
//get paragraph items
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");


//when key is pressed 
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
        playerYDir === 0;
    }
}



//player position and movmeent
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 2;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, 100, 20);
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);
    playerY += (playerSpeed * playerYDir);
}

function refreshPlayer() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
}





//object position
//let xPosition = 0;
let yPosition = 0;
//let xDirection = 1;

//function moveHorizontal() {
//clear screen
//ctx.clearRect(0, 0, 500, 500);
//draw rect at current position
//ctx.fillRect(xPosition, 0, 20, 20);
//move the x position over by x pixels
//xPosition += 1;
//did I hit the wall? if so wrap around
//if (xPosition >= 500) {
//  xPosition = 0;
//}


// #1 rect moving vertycally then wrapping around
function moveVertical() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);
    //draw rect at current position
    ctx.fillRect(0, yPosition, 20, 20);
    yPosition += 1;
    if (yPosition >= 500) {
        yPosition = 0;
    }
}

// #2 rect bouncing horizontally
//function bounceHorizontal() {
//clear screen
//  ctx.clearRect(0, 0, 500, 500);
//draw rect at current position
//ctx.fillRect(0, 0, 20, xDirection);
//xPosition += 1;
//if (xDirection >= 500) {
//  xDirection = 0;


//}




//}




// #3 ball bouncing horizontally


//setInterval(moveVertical, 5);
setInterval(refreshPlayer, 30);