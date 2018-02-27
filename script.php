<?php
//Variables
$month = date('m');
$day = date('d');

//Calculate mood by season
if ($month == 2 && $day >= 15) {
    $mood = "arriving";
} elseif ($month == 3) {
    $mood = "arriving";
} elseif ($month == 4 || $month == 5) {
    $mood = "aggressive";
} elseif ($month >= 6 && $month <= 8) {
    $mood = "poopy";
} elseif ($month >= 9 && $month <= 11) {
    $mood = "ok";
} elseif ($month == 12 && $day <= 10) {
    $mood = "ok";
} else {
    $mood = "gone";
}

//Update display text
if ($mood == "gone") {
    $moodText = "The geese have migrated South... You are safe for now.";
    $gooseImg = "img/goneGoose.png";
} elseif ($mood == "arriving") {
    $moodText = "The geese are on their way back! Prepare yourself.";
    $gooseImg = "img/arrivingGoose.png";
} elseif ($mood == "aggressive") {
    $moodText = "It's breeding season, and the geese are sensitive. Avoid interaction AT ALL COSTS.";
    $gooseImg = "img/aggressiveGoose.png";
} elseif ($mood == "poopy") {
    $moodText = "The geese are taking care of their ducklings. Watch out for green poop.";
    $gooseImg = "img/poopyGoose.png";
} else  {
    $moodText = "The geese are feeling decent- but don't try cuddling up to one.";
    $gooseImg = "img/okGoose.png";
}
