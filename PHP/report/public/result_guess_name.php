<?php
include('../view/header.php');
session_start();
?>

<main class="g_game">
    <?php
    if (strtolower($_POST["user_input"]) == strtolower($_SESSION['newsession'])) {
        ?>
        <h1>Congratulations !!</h1><br>
        <p>True, the right answer is: <strong><?= $_SESSION['newsession'] ?></strong>, your answer was: <strong><?= $_POST["user_input"] ?></strong></p><br>
        <a href="../public/guessname.php">Play Agin</a>
        <?php
    } else {
        ?>
        <h1>Better Luck Next Time</h1><br>
        <p>False, the right answer is: <strong><?= $_SESSION['newsession'] ?></strong>. your answer was: <strong><?= $_POST["user_input"] ?></strong></p><br>
        <a href="../public/guessname.php">Play Agin</a>
        <?php
    }
    ?>
</main>

<?php

include('../view/footer.php');
?>