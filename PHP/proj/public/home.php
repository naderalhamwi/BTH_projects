<?php
$title = "Home";

include("../config/config.php");

include("../src/functions.php");

?>

<main>
    <div class="wolcomeText">
        <h1>Välkommen till Begravningsmuseum Online !!!</h1>
        <?php get_all_article("4_part_of_text"); ?>
    </div>
    <?php get_all_article("last_on_date"); ?>
    <?php get_all_object("true");?>
    <div class="botom">
        <a href="#">Upp</a>
    </div>
</main>

<?php

include("../view/footer.php");
