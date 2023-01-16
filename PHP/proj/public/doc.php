<?php
$title = "Docs";

include("../config/config.php");

?>

<main>
    <article class="doc_article">
        <h2>Docs:</h2>
        <p>Jag föjade samma struktur som vi jobbade med under kursen. public, src och view. Jag valde och göra en enkelt hemsida med enkel funktionalitet och file hamterin för vidare förbättringar. jag försökte göra uneversella functioner som kan användas på olika ställer och olika sätt som till exempel med functionen get_all_article() så kan man välja ett av valen som functionen acepterar för att få datan av databasen på olika sätt. Exempel på val: "4" stor för id för artekle, "last_on_date" då får man sidta upplagd article eller sickar man inget så för man alla artiklar.</p>
        <p>Jag anser att sidan jag skapade har mycket bra responsivetet för olika skärm storlek. Jag testade med mobil samt dator skärm och hade inget problem. Jag spenderade bra tid för att strukturerar hur sidan style ska hanteras och kunna förbättra på enkel sätt som möjligt. något jag tänker och förbättra kan vara färger, ville hitta bättre färger som passar mer med sidan innehåll, men det lämnade jag då jag fukurerade mer med andra viktiga delar på projektet.</p>
        <p>Förbättringar till sidan säkert finns, men för närvarande är sidan ganska bra och stabilt. men för vidare utviklingar så kan sidan ha bättre färger, användare häntering som loggar in, skapa och ändra artiklar eller objekt, bättre function hantering där man kan ha fler var gällande hämtning av object eller artiklar.</p>
        <nav class="doc_nav">
            <ul>
                <li>Chek site with: </li>
                <li><a href="http://validator.w3.org/check/referer">HTML</a>,</li>
                <li><a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a>,</li>
                <li><a href="http://validator.w3.org/unicorn/check?ucn_uri=referer&ucn_task=conformance">Unicorn</a>,</li>
                <li><a href="https://validator.w3.org/checklink">Link checker</a>.</li>
            </ul>
        </nav>
    </article>
</main>

<?php

include("../view/footer.php");
