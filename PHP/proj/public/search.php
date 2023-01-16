<?php

$user_serach_word = $_GET['search'] ?? null;

$title = "Result for: $user_serach_word";

include("../config/config.php");

include("../src/functions.php");


if ($user_serach_word == null) {
    ?>
        <main class="search_not_found">
            <div>
                <p>Hittar inget med din sökning! "<?= $user_serach_word?>"</p>
            </div>
        </main>
    <?php
} else {
    ?>
    <main>
        <p><?= search("$user_serach_word%");?></p>
    </main>
    <?php
}


include("../view/footer.php");