//TikTok's magic algorithm
function magicAlgorithm(numLikes, comment, numShares, numDuets) {
    let rank = 0;

    //magic!
    if (numLikes >= 1000000 && comment.includes("so good video") && numShares >= 1000000 && numDuets >= 1000000) {
        rank = 1;
    } else if (numLikes >= 10000 && comment.includes("not so good video") && numShares >= 10000 && numDuets >= 5000) {
        rank = 100;
    } else {
        rank = 1000;
    }

    return rank;
}


alert("Welcome to TikTok! imagine I'm showing you a tiktok video right now ");
let likeCount = Number(prompt("How many like did this tiktok video get?"));
let sharesCount = Number(prompt("How many people shared this video?"));
let duetsCount = Number(prompt("How many people dueted this video?"))

//ask for a video comment 

let comment = prompt("what is the most recent comment on this tiktok?");

//using the two imputs above, pass that ino magic function and return the result
let rankResult = magicAlgorithm("likeCount, comment, sharesCount, duetsCount");
let resultString = "Based off of the magic algorithm, this video's rank is: " + rankResult;
alert(resultString);