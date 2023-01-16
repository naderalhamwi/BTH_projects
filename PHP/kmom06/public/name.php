<?php
$title = 'selected name';
include("../config/config.php");
include('../view/header.php');

?>
<main class="table">
<?php

$selected_name = $_GET['selected_value'] ?? null;

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
    namn = ?
;
EOD;

$sql_betydelse = <<<EOD
SELECT
    betydelse
FROM namnbetydelse 
WHERE
    namn = ?
;
EOD;

// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);
$stmt_sql_betydelse = $db->prepare($sql_betydelse);

// Execute the SQL statement towards the database
$args = [$selected_name];
$stmt->execute($args);
$stmt_sql_betydelse->execute($args);

// Get the resultset and print it out
$res = $stmt->fetchAll();
$res_betydelse = $stmt_sql_betydelse->fetch();

?>
    <table>
        <tr>
            <th>Id</th>
            <th>Namn</th>
            <th>Datum</th>
            <th>Namnlängd</th>
            <th>namnbetydelse</th>
        </tr>

    <?php foreach ($res as $row) : ?>
        <tr>
            <td><?= $row['rowid'] ?></td>
            <td><?= $row['namn'] ?></td>
            <td><?= $row['datum'] ?></td>
            <td><?= $row['namnlangd'] ?></td>
            <?php
            if ($res_betydelse) {
                ?>
                    <td><?= $res_betydelse['betydelse']?></td> 
                <?php
            } else {
                ?>
                    <td>No data</td> 
                <?php
            }
            ?>
        </tr>
    <?php endforeach ?>
    </table>
</main>

<?php include('../view/footer.php');?>