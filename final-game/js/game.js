let myGame = document.getElementById("my-game");
let ctx = myGame.getContext("2d");
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let pic = document.getElementById("enemy")
let picture = document.getElementById("life")
let image = document.getElementById("finish")
let image2 = document.getElementById("player")




//player position and movement
let picX = 900;
let picY = 100;
let pictureX = 500;
let pictureY = 100;
let imageX = 1100;
let imageY = 320;
let image2X = 10;
let image2Y = 310;

const IMG_WIDTH = 150;
const IMG_HEIGHT = 150;


function drawImage() {
    ctx.drawImage(pic, picX, picY, IMG_HEIGHT, IMG_WIDTH);
    ctx.drawImage(picture, pictureX, pictureY, IMG_HEIGHT, IMG_WIDTH);
    ctx.drawImage(image, imageX, imageY, IMG_HEIGHT, IMG_WIDTH);
    ctx.drawImage(image2, image2X, image2Y, IMG_HEIGHT, IMG_WIDTH);
}



function refreshPlayer() {
    drawImage();


}

setInterval(refreshPlayer)