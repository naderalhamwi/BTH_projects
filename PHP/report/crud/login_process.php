<?php

// Include the config file
include("../config/config.php");

// Get incoming POST data
$acronym = $_POST["acronym"] ?? "";
$password = $_POST["password"] ?? "";

// Check if the acronym and password matches
// This should be done using the database
$fileName = "../db/user.sqlite";
if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
    $fileName = "C:\db\user.sqlite";
}
$dsn = "sqlite:$fileName";
$db = connectToDatabase($dsn);

$sql = <<<EOD
-- Get the password for a acronym
SELECT
    password
FROM user
WHERE
    acronym = ?
;
EOD;

// Get the password hash from the database
$stmt = $db->prepare($sql);
$args = [$acronym];
$stmt->execute($args);
$res = $stmt->fetch();

// Verify the database hash
$hash = $res["password"];
$success = password_verify($password, $hash);

// If no not match, return to the login page
if (!$success) {
    // Do a redirect
    setFlashMessage("warning", "Login failed, wrong user or password!");
    header("Location: login.php");
    exit();
}

// The acronym and password did match, save the acronym in the session
$_SESSION["user"] = $acronym;

// Do a redirect
setFlashMessage("success", "Login successful, welcome $acronym!");
header("Location: user.php");
exit();
