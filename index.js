function generateMessage(daysLeft) {
    let message = "Only " + daysLeft + " days left!"

    if (daysLeft % 3 == 0) {
        message = "I'll see your face in " + daysLeft + " days!"
    }
    if (daysLeft % 4 == 0) {
        message = "PupperTime in " + daysLeft + " days!"
    }
    if (daysLeft % 5 == 0) {
        message = "I get to annoy you in " + daysLeft + " days <3!"
    }
    if (daysLeft < 10) {
        message = "Soooo closeee only " + daysLeft + " days lefttt!"
    }
    if (daysLeft < 5) {
        message = "Time to paaaack, only " + daysLeft + " days lefttt!"
    }
    if (daysLeft == 0) {
        message = "OMG HI."
    }
    else if (daysLeft < 0) {
        message = "I miss you."
    }
    
    return message
}


window.onload = function () {
    // Calculate days left
    // Get UNIX timestamp, convert to days since epoch
    let targetDate = Math.floor((new Date(2017, 02, 16)).getTime() / 86400000)
    let today = Math.floor((new Date()).getTime() / 86400000)
    let daysLeft = targetDate - today // don't count today

    let message = generateMessage(daysLeft)

    // set title of document
    if (daysLeft > 0) {
        document.title = daysLeft + ' days left!'
    } else {
        document.title = 'I miss you.'
    }
    // set inner html ugh
    document.getElementById("days").innerHTML = message
}
