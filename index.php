<!DOCTYPE html>
<html>
    <?php
    require('script.php');
    ?>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>UW GooseMood</title>
        <meta name="description" content="Good goose bad goose">
        <link rel="stylesheet" href="stylesheet.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito">
    </head>
    <body>
        <h1>UW GooseMood</h1>
        <div class="center">
        <img id="gooseImg" src="<?php echo $gooseImg; ?>" alt="Where is the goose?" width="300" height ="300">
        <p id="moodText"><?php echo $moodText; ?></p>
        </div>
    </body>
    <footer>
        <h2 class="footer">Originally by Amy Liang, modified for PHP by Kevin Paxman</h2>
    </footer>
</html>

