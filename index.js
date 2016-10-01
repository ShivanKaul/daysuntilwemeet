window.onload = function() {
    // Calculate days left
    let targetDate = new Date(2016, 9, 29)
    let today = new Date()
    let daysLeft = targetDate.getDate() - today.getDate() - 1 // don't count today
    
    // set title of document
    document.title = daysLeft + ' days left!'
    // set inner html ugh
    document.getElementById("daysLeft").innerHTML = daysLeft;
}