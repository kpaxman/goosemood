var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var mood;
var moodText = document.getElementById("moodText");
var actionText = document.getElementById("actionText");

if (month == 1) {
    mood = "gone";
} else if (month == 2 && date <= 15) {
    mood = "gone";
} else if (month == 2) {
    mood = "arriving"; 
} else if (month == 3) {
    mood = "arriving";
} else if (month == 4) {
    mood = "aggressive";
} else if (month == 5) {
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

//var weather = 
    
if (mood == "gone") {
        moodText.textContent = "The geese have migrated South...";
        actionText.textContent = "You are safe for now."; 
} else if (mood == "arriving") {
        moodText.textContent = "The geese are on their way back!";
        actionText.textContent = "Prepare yourself";    
} else if (mood == "aggressive") {
        moodText.textContent = "It's breeding season, and the geese are sensitive.";
        actionText.textContent = "Avoid eye contact at all costs and stay AWAY.";    
} else if (mood == "poopy") {
        moodText.textContent = "The geese are taking care of their ducklings.";
        actionText.textContent = "Keep your distance and watch out for poop.";  
} else if (mood == "ok") {
        moodText.textContent = "The geese are feeling OK.";
        actionText.textContent = "They'll hiss less (maybe) (on average).";  
}



/**

TIMES:

Feb to March: Arrival
Mid-March to Early May: Breeding/Nesting
Early May to Late July: Rearing/Mounting
Late July to Mid Nov: Foraging Flights
Mid Nov to Dec: Fall Migration

http://thamesriver.on.ca/wp-content/uploads/NativeSpecies/geeseshorelines.pdf

APRIL = bad time
EARLY DECEMBER = mostly gone
DECEMBER = gone


TIPS:

http://wdfw.wa.gov/living/canada_geese.html

**/