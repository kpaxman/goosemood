//Variables
var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var mood;
var moodText = document.getElementById("moodText");
var gooseImg = document.getElementById("gooseImg");

//Calculate mood by season
if (month == 2 && day >= 15) {
    mood = "arriving"; 
} else if (month == 3) {
    mood = "arriving";
} else if (month == 4 || month == 5) {
    mood = "aggressive";
} else if (month >= 6 && month <= 8) {
    mood = "poopy";
} else if (month >= 9 && month <= 11) {
    mood = "ok";   
} else if (month == 12 && day <= 10) {
    mood = "ok";     
} else {
    mood = "gone";
}
    
//Update display text
if (mood == "gone") {
    moodText.textContent = "The geese have migrated South... You are safe for now.";
    gooseImg.src = "img/goneGoose.png";
} else if (mood == "arriving") {
    moodText.textContent = "The geese are on their way back! Prepare yourself.";
    gooseImg.src = "img/arrivingGoose.png";
} else if (mood == "aggressive") {
    moodText.textContent = "It's breeding season, and the geese are sensitive. Avoid interaction AT ALL COSTS.";
    gooseImg.src = "img/aggressiveGoose.png";
} else if (mood == "poopy") {
    moodText.textContent = "The geese are taking care of their ducklings. Watch out for green poop.";
    gooseImg.src = "img/poopyGoose.png";
} else  {
    moodText.textContent = "The geese are feeling decent- but don't try cuddling up to one.";
    gooseImg.src = "img/okGoose.png";
}
