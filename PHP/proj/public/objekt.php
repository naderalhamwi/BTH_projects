<?php
$title = "Objects";

include("../config/config.php");

include("../src/functions.php");

?>

<main>
    <?php
        get_all_object()
    ?>
    <div class="botom">
        <a href="#">Upp</a>
    </div>
</main>

<?php

include("../view/footer.php");
