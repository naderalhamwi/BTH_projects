<?php
include('../view/header.php');

$dayNum = date('N');
$dayStr = date('l');
$daysLeft = 5 - $dayNum;
$input_date = $_GET['date'] ?? null;
$day = date("l");
$dateStr = "";

if ($input_date) {
    $dateStr = htmlentities($input_date);
    $timestamp = strtotime($dateStr);
    $day = date('l', $timestamp);
    $daysLeft = date('N', $timestamp);
}
?>

<?php
if ($day != "Friday") {
    ?>
    <main class="not_friday">
        <h1>Not Friday yet!, It will be in <?= $daysLeft ?> days</h1>
        <form method="get">
            <input type="text" value="<?= $dateStr ?>" name="date" placeholder="Test date if it's Friday">
            <input type="submit" value="Skicka" name="doit">
        </form>
    </main>
    <?php
} elseif ($day == "Friday") {
    ?>
    <main class="is_friday">
        <video width="100%" height="100%" autoplay>
            <source src="img/my_vedio.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
    </main>
    <?php
}
include('../view/footer.php');
?>