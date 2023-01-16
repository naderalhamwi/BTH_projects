<?php

$object_id = $_GET['id'] ?? null;
$object_title = $_GET['title'] ?? null;

$title = "Selected object: $object_title";

include("../config/config.php");

include("../src/functions.php");

?>

<main>
    <?php selected_object($object_id)?>
</main>
