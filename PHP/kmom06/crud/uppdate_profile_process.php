<?php

// Include the config file
include("../config/config.php");

// Check if user is logged in or redirect to login
$user = checkIfUserLoggedInOrRedirectToLogin();

// Get incoming from post form
$user_name = $_POST["user_name"] ?? null;
$signatur = $_POST["signature"] ?? null;
$avatar = $_POST["avatar"] ?? null;


// Check if the acronym and password matches
// This should be done using the database
$fileName = "../db/user.sqlite";
if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
    $fileName = "C:\db\user.sqlite";
}
$dsn = "sqlite:$fileName";
$db = connectToDatabase($dsn);

// Create the SQL statement
$sql = <<<EOD
UPDATE user SET
    name = ?,
    avatar = ?,
    signature = ?
WHERE
    acronym = ?
;
EOD;

// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);

// Execute the SQL statement towards the database
$args = [$user_name, $avatar, $signatur, $user];
$stmt->execute($args);

// Redirect to the user page
setFlashMessage("success", "The profile was changed in the database!");
redirectTo("user.php");
