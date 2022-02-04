let myCamvas = document.getElementById("my-canvas");
let ctx = myCamvas.getContext("2d");

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


setInterval(moveVertical, 5)