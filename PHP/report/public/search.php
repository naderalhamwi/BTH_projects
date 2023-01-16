<?php
$title = 'Search';

include("../config/config.php");

include('../view/header.php');

?>
<main class="search_main">
<?php

$doit  = $_GET['doit'] ?? null;
$query = $_GET['query'] ?? null;

// Create a DSN for the database using its filename
$fileName = "../db/db.sqlite";
if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
    $fileName = "C:\db\db.sqlite";
}
$dsn = "sqlite:$fileName";
$db = connectToDatabase($dsn);

// Create the SQL statement
$sql = <<<EOD
SELECT
    rowid,
    *
FROM namnlista
WHERE
    namn LIKE ?
    OR datum LIKE ?
    OR namnlangd LIKE ?
    OR rowid = ?
;
EOD;

// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);

// Execute the SQL statement towards the database
$args = [$query, $query, $query, $query];
$stmt->execute($args);

// Get the resultset and print it out
$res = $stmt->fetchAll();


?>
    <h1 class="test">Sök i databasen</h1>
    <form >
        <input type="search" name="query">
        <input type="submit" name="doit" value="search">
    </form>     
        <?php
        if (!$res) {
            ?>
                <p></p>
            <?php
        } else {
            foreach ($res as $row) {
                ?>
                    <form action="name.php">
                        <input type="submit" name="selected_value" value="<?= $row['namn']?>">
                    </form>
                <?php
            }
        }
        ?>
</main>
<?php include('../view/footer.php');?>