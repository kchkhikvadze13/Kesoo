alert("are you ready to play game?")

var x = 5; //Starting x coord.

var y = 5; //Starting y coord.

var max_x = 1200; //maximum x coord.

var max_y = 400; //maximum y coord.

var xoffset = 10; //Move 10px every step

var yoffset = 10; //Move 10px every step




function go()

{

    moveLogo()

}

function moveLogo() {

    x = x + xoffset;

    y = y + yoffset;

    //Move the image to the new location

    document.getElementById("figures").style.top = y + 'px';
    document.getElementById("figures").style.left = x + 'px';

    document.getElementById("figures2")

    //if reach boundaries, reset offset vectors

    if ((x + xoffset > max_x) || (x + xoffset < 0))

        xoffset *= -1;

    if ((y + yoffset > max_y) || (y + yoffset < 0))

        yoffset *= -1;

    window.setTimeout('moveLogo()', 100);


    //call moveLogo every 100 ms

}