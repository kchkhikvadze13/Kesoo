let mood = 0;
let belly = 0;
let shower = 0;
let minute = 60;


function feedPet() {
    console.log("Feeding pet.");
    //belly = belly + 1;
    if (belly < 10) {
        belly += 1;
    }
    console.log("belly:  " + belly);
    //check for negative numbers 

    refreshUI();

}

function petPet() {
    console.log("happy pet.");
    if (mood < 10) {
        mood += 1;
    }
    console.log("mood:  " + mood);

    refreshUI();
}

function washPet() {
    console.log("washing pet.")
    if (shower < 10) {
        shower += 1;
    }
    console.log("shower: " + shower);

    refreshUI();
}

function decreasePet() {
    if (belly > 0) {
        belly -= 1;
    }
    if (mood > 0) {
        mood -= 1;
    }
    if (shower > 0) {
        shower -= 1;
    }
    refreshUI();
}

function decreaseTime() {
    if (minute > 0) {
        minute -= 1;

    }

    refreshUI();
}





function refreshUI() {
    let bellyMeter = document.getElementById("bellymeter");
    bellyMeter.value = belly;
    let bellyParagraph = document.getElementById("belly-paragraph")
    bellyParagraph.innerHTML = belly;
    //
    let moodMeter = document.getElementById("happymeter");
    moodMeter.value = mood;
    let moodParagraph = document.getElementById("happy-paragraph")
    moodParagraph.innerHTML = mood;
    //
    let showerMeter = document.getElementById("clean");
    showerMeter.value = shower;
    let showerParagraph = document.getElementById("clean-paragraph");
    showerParagraph.innerHTML = shower;

    //
    let timeOut = document.getElementById("timer");
    timeOut.value = minute;
    let timerParagraph = document.getElementById("timeout");
    timerParagraph.innerHTML = minute;

    //update pet image and paragraph
    let petImg = document.getElementById("pet-image");
    let petParagraph = document.getElementById("pet-condition");

    if (mood <= 3 && belly <= 3 && shower <= 3) {
        petImg.src = "gallery/sad.gif";
        petParagraph.innerHTML = "Oh, no... she is crying!";

    } else { // default image and state
        petImg.src = "gallery/happy.gif"
        petParagraph.innerHTML = "Happy bee!";
    }

    if (shower >= 8) {
        petImg.src = "gallery/showering.gif";
        petParagraph.innerHTML = "she is clean now!";

    }
    if (belly >= 8) {
        petImg.src = "gallery/qoobee-eating.gif"
        petParagraph.innerHTML = "good joob!";
    }

    if (mood >= 8) {
        petImg.src = "gallery/love.gif"
        petParagraph.innerHTML = "she is so happuy with you!";
    }
    if (minute <= 0) {
        alert("Time is out! Refresh the page if you want to keep playing!")
    }

}




let minut = setInterval(decreaseTime, 1000);

let petTimer = setInterval(decreasePet, 990);