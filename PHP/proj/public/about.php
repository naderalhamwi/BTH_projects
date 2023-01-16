<?php
$title = "About";

include("../config/config.php");
include("../src/functions.php");
?>

<main class="main_about">
    <article>
        <h2>Om hemsidan</h2>
        <?php get_all_article("4")?>
    </article>

    <article>
        <h2>Om projektet</h2>
        <p>Denna projectet är en examination av det eleverna på BTH att visa vad de lärde sig under alla korsmomenterna. Ideen bakom projectet är att bygga en hem sida till Begravningsmuseum Online. Delera som man bör använda i denna projektet är: </p>
        <p>Att bygga en grundläggande hemsida med responsiv styl. Att kunna presentera angeven data av sqlite database på ett snyggt sätt. Extra Att kunna söka efter artiklar eller object på hemsida. Extra att kunna logga in som admin och lägga till eller ändra object och artiklar. Extra Att ha en galleri där man kan bladra mellan alla bilder på hemsidan.Denna projektet har nått alla grundläggande krav samt 1 av 3 extra krav.</p>
        <p>projectet byggdes änligt strukturen som kursen började på, där filerna är delade mellan:</p>
        <p>public: filen som innehåller HTML koden till alla andra sidor, också style filar och bilder.</p>
        <p>view: filen som innehåller HTML koden till header, footer, och nav av sidan.</p>
        <p>src: filen som innehåller alla funktioner som gör webbplatsen fungerande.</p>
        <p>projektet då byggdes så att man kan ha det lätt och följa hur sakerna hänger ihåp samt bygga lätt vidare med den.</p>
    </article>

    <article>
        <h2>Om skaparen</h2>
        <p>
            Nader Alhamwi är en 24 åring kille, som har sotr intresse på programering. Bor
            nu i växjö och läser sitt första år i Blekinge Tekniska Högskola. 
        </p>
        <a href="doc.php">Lästa dokumentation</a>
    </article>

    <footer class="byline">
        <figure>
            <img src="img/naderAlhamwi.jpg" width="300" class="me" alt="Bild på mig">
            <figcaption>Nader Alhamwi</figcaption>
        </figure>
        <h1>Nader Alhamwi / Juniur Fullstack Developer</h1>
        <p>Är nu ett student på BTH, har extra jobbar som distrebetör och på fritiden tyker han om och testa och ska skaer med nya tekneker.</p>
    </footer>
</main>

<?php

include("../view/footer.php");
