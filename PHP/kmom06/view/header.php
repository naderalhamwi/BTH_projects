<?php

$requestUri = $_SERVER["SCRIPT_NAME"];
$pageController = basename($requestUri);
$user = checkIfUserLoggedIn();

?>

<!doctype html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <title><?= $title ?></title>
    <meta name="referrer" content="unsafe-url">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"> 
    <link rel="shortcut icon" href="../img/logo.png">
    <link rel="stylesheet" href="../public/css/style.css">
</head>
<body>
    <header>
        <img src="../public/img/logo.png" alt="logo">
        <h1>Kursen Webtec</h1>
        <h4>Här blir idéerna levande</h4>
    </header>
    <nav>
        <ul>
            <li><a href="../public/me.php">Me</a></li>
            <li><a href="../public/report.php">Report</a></li>
            <li><a href="../public/about.php">About</a></li>
            <li><a href="../public/today.php">Today</a></li>
            <li><a href="../public/friday.php">Is't Friday?</a></li>
            <?php if ($user) : ?>
                <li><a href="../public/session.php">session</a></li>
                <li><a href="../public/month.php">Calandar</a></li>
                <li><a href="../public/guessname.php">guess name</a></li>
                <li><a href="../public/search.php">search</a></li>
                <li><a href="../crud/user.php"><?= $user ?></a></li>
                <li><a href="../crud/logout_process.php">Logout</a></li>
            <?php else : ?>
                <li><a href="../crud/login.php">Login</a></li>
            <?php endif; ?>
        </ul>
    </nav>