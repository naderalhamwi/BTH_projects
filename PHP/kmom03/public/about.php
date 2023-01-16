<?php
include('../config/config.php');

$title = 'Om kurs och webbplatsen';

include('../view/header.php');
?>

<main class="mainWithAside">
    <div>
        <h1>Om kursen och webbplatsen</h1>
        <hr>
        <article>
            <h2>Kurs beskrivning:</h2>
            <p>
                Kursen Webbteknologier, a.k.a. webtec, lär ut webbutveckling där teknikerna HTML, CSS, PHP och SQL används för att tillsammans bygga en databasdriven webbplats.
            </p>
            <p>
                Den webbplatsen som är skapat av Nader Alhamwi är för redovisa uppgifter och bladra mella alla skol uppgifter.
            </p>
            <figure>
                <img src="img/arbetsmiljo.jpg" alt="Naders arbetsmiljÖ">
                <figcaption>Nader arbetsmiljö</figcaption>
            </figure>
        </article>
    </div>
    <aside class="asideKursInfo">
        <div>
            <h2>kursen webtec:</h2>
            <hr>
            <p>Är den kurser som man lär sig grunden för webb programering</p>
        </div>
        <div>
            <h2>kursrepo:</h2>
            <hr>
            <p>Kurser finns på <a href="https://github.com/dbwebb-se/webtec">Github</a>, där finns det exempleprogram och hjälp vid bugs</p>
        </div>
    </aside>
</main>

<?php include('../view/footer.php') ?>