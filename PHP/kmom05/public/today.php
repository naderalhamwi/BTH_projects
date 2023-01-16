<?php
include('../config/config.php');

$title = 'Om mig själv';

// Set the timezone to use
date_default_timezone_set('Europe/Stockholm');

// The date of today
$today = date('Y-m-d');

// Name of the week day
$weekday = date('l');

include('../view/header.php');
?>

<main class="wrapper">
    <h1><strong> <?= $today ?></strong> / <strong><?= $weekday ?></strong></h1>
    <h1><strong> <?= $today ?></strong> / <strong><?= $weekday ?></strong></h1>
    <h1><strong> <?= $today ?></strong> / <strong><?= $weekday ?></strong></h1>
</main>


<?php include('../view/footer.php') ?>