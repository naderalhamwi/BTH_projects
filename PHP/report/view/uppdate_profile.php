<?php

$name = htmlentities($res2['name'] ?? "");


?><h1>Changing profile for: '<?= $user ?>'</h1>


<main>
    <?= getFlashMessage() ?>
<form method="post" action="uppdate_profile_process.php">
    <fieldset>
        <legend>Update profile '<?= $user ?>'</legend>

        <p>
            <label>Name:<br>
                <input type="text" name="user_name"  placeholder="The new name again">
            </label>
        </p>
        <p>
            <label>Signatur:<br>
                <input type="text" name="signature" placeholder="The new signatur again">
            </label>
        </p>
        <p>
            <label>Avatar<br>
                <select name="avatar">
                    <option value="../public/img/admin.png">Admin</option>
                    <option value="../public/img/doe.png">Doe</option>
                    <option value="../public/img/mos.jpg">Mos</option>
                </select>
            </label>
        </p>

        <p>
            <input type="submit" name="doit" value="Update profile">
        </p>

    </fieldset>
</form>

</main>