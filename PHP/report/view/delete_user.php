<?php

$user = checkIfUserLoggedInOrRedirectToLogin();

?>


<main>
    <?= getFlashMessage() ?>
    <h1>Delete user</h1>
<form method="post" action="delete_user_process.php">
    <fieldset>
        <legend>Delete user</legend>

        <p>
            <input type="submit" name="doit" value="Delete your own user '<?= $user ?>'">
        </p>

    </fieldset>
</form>

</main>