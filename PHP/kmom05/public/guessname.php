<?php
$title = 'Guessname';
include('../view/header.php');
include('../src/calendar.php');

session_start();
$_SESSION["newsession"] = "";

?>

<main class="g_game">

    <?php
    $t =  getNameDaysByName();
    $g =  getNameExplanation();

    while ($g[$rand_keys] == "") {
        $rand_keys = array_rand($t);
    }
    ?>
    <p><?= $g[$rand_keys] ?></p><br>
    <?php
    $_SESSION["newsession"] = $rand_keys;
    ?>

    <form action="result_guess_name.php" method="post">
        <input type="text" value="<?= $user_input ?>" placeholder="Din gissning" name="user_input">
        <input type="submit" value="Send">
    </form>

</main>


<?php

include('../view/footer.php');
?>