function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

    // Update the clock element with the current time
    document.getElementById("clock").innerHTML = timeString;

    // Call the function every second to update the time
    setTimeout(updateClock, 1000);
}

// Function to format time values (adds leading zero if needed)
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Call the updateClock function to start updating the clock
updateClock();

//CALCULATOR (JAVASCRIPT)
var showCalc = false;
function showCalculator(){
    if (showCalc == false){
        document.getElementById("calc").style.opacity = 1;
        showCalc = true;
    }
    else if (showCalc == true){
        document.getElementById("calc").style.opacity = 0;
        showCalc = false;
    }
 }

 //POST-IT NOTE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
}
   
   function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
}

var show = false;
function showNote(){
    if (show == false){
        document.getElementById("note").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("note").style.opacity = 0;
        show = false;
    }
 }

 // Gmail bookmark element
var gmailBookmark = document.querySelector('.fa-envelope');

gmailBookmark.addEventListener('click', function(event) {
    
    event.preventDefault();

    window.open('http://mail.google.com', '_blank');
});

