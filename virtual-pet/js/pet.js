let mood = 0;
let belly = 0;
let shower = 0;


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


}

let petTimer = setInterval(decreasePet, 990);