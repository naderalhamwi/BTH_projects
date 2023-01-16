<?php

$requestUri = $_SERVER["SCRIPT_NAME"];
$pageController = basename($requestUri);

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
    <link rel="shortcut icon" href="img/logo.png">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <img src="img/logo.png" alt="logo">
        <h1>Kursen Webtec</h1>
        <h4>Här blir idéerna levande</h4>
    </header>
    <nav>
        <ul>
            <li><a href="me.php">Me</a></li>
            <li><a href="report.php">Report</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="today.php">Today</a></li>
            <li><a href="friday.php">Is't Friday?</a></li>
            <li><a href="month.php">Calandar</a></li>
            <li><a href="session.php">session</a></li>
            <li><a href="guessname.php">guess name</a></li>
            <li><a href="search.php">search</a></li>
        </ul>
    </nav>