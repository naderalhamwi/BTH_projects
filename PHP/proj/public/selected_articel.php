<?php

$article_id = $_GET['id'] ?? null;
$article_title = $_GET['title'] ?? null;

$title = "Selected article: $article_title";

include("../config/config.php");

include("../src/functions.php");

?>

<main>
    <?php selected_article($article_id)?>
</main>