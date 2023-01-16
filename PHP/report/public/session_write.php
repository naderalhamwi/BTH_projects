<?php

include('../config/config.php');

$_SESSION["magic"] = rand(1, 100);

$increment = $_SESSION["increment"] ?? 0;
$increment += 1;
$_SESSION["increment"] = $increment;

header("Location: session.php");
exit();
