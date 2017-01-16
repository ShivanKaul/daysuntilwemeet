'use strict';

// Configurable things
// REMEMBER: Date takes in month to be 0 indexed! January is 0.
let targetDate = (new Date(2017, 1, 16)).getTime();
let heartLink="https://giphy.com/gifs/excited-corgi-xT77XKxcPqxIZqUrwk"

function generateMessage(daysLeft) {
    let message = "Only " + daysLeft + " days left!";

    if (daysLeft % 3 === 0) {
        message = "I'll see your face in " + daysLeft + " days!";
    }
    if (daysLeft % 4 === 0) {
        message = "PupperTime in " + daysLeft + " days!";
    }
    if (daysLeft % 5 === 0) {
        message = "I get to annoy you in " + daysLeft + " days <3!";
    }
    if (daysLeft < 10) {
        message = "Soooo closeee only " + daysLeft + " days lefttt!";
    }
    if (daysLeft < 5) {
        message = "Time to paaaack, only " + daysLeft + " days lefttt!";
    }
    if (daysLeft === 0) {
        message = "OMG HI.";
    }
    else if (daysLeft < 0) {
        message = "I miss you.";
    }

    return message;
}


window.onload = function () {
    // Calculate days left
    // Get UNIX timestamp, convert to days since epoch
    let today = (new Date()).setHours(0, 0, 0, 0);
    let daysLeft = Math.floor((targetDate - today) / 86400000);

    let message = generateMessage(daysLeft);

    // set title of document
    if (daysLeft > 0) {
        document.title = daysLeft + ' days left!';
    } else {
        document.title = 'I miss you.';
    }
    // Set inner html ugh
    document.getElementById("days").innerHTML = message;
    // Set link
    document.getElementById("heartLink").href = heartLink;
}
