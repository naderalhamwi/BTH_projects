<?php
include('../config/config.php');

$title = 'Om mig själv';

// Set the timezone to use
date_default_timezone_set('Europe/Stockholm');

// The date of today
$today = date('Y-m-d H:i:s');

// Name of the week day
$weekday = date('l');

include('../view/header.php');
?>

<main>
    <p>Dagens datum är <strong> <?= $today ?></strong> och idag är det <strong><?= $weekday ?></strong>.</p>
</main>


<?php include('../view/footer.php') ?>