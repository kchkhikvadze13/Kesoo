//console.log("test");
//let's do for loops
//count 1-10
for (let counter = 1; counter < 10; counter++) {
    console.log(counter);
}
//count 10-1
for (let counter = 10; counter >= 1; counter -= 1) {
    console.log(counter);
}
//count 1-10 only odd numbers
for (let counter = 1; counter < 11; counter = counter + 2) {
    console.log(counter)
}

//get canvas
let myCanvas = document.getElementById("my-canvas");
//create canvas object
let ctx = myCanvas.getContext("2d");
//draw rect
ctx.fillStyle = "RebeccaPurple";
ctx.fillRect(0, 0, 200, 100);

//draw lines
ctx.beginPath()
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(0, 100);
ctx.lineTo(200, 0);
ctx.stroke();

//draw cicrcle
ctx.beginPath();
ctx.arc(100, 50, 25, 0, 2 * mathPI);
ctx.strokeStyle = "Red";
ctx.stroke();