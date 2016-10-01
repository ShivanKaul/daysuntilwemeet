window.onload = function() {
    // Calculate days left
    // Get UNIX timestamp, convert to days since epoch
    let targetDate = Math.floor((new Date(2016, 9, 29)).getTime() / 86400000)
    let today = Math.floor((new Date()).getTime() / 86400000)
    let daysLeft = targetDate - today - 1 // don't count today
    
    // set title of document
    document.title = daysLeft + ' days left!'
    // set inner html ugh
    document.getElementById("daysLeft").innerHTML = daysLeft;
}