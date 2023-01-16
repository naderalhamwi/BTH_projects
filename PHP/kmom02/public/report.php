<?php
$title = 'Redovisningstexter';

include('../config/config.php');
include('../view/header.php');
?>

<main class="mainWithAside">
    <div>
        <h1>Redovisning</h1>
        <hr>
        <article>
            <h2 id="kmom01">kmom01</h2>
            <p>Kmom01 är att bygga en enkel webbplats där eleverna redovisa och dela deras skoluppgifter.</p>

            <h4>Här nedan är svar på frågor om den kursmoment:</h4>
            <ol>
                <li><strong>Operativsystem:</strong> Windows 10, <strong>Texteditor</strong>: VS code, <strong>localhost</strong>: XAMMP, <strong>Termenal</strong>: Ubuntu, <strong>Webbläsare</strong>: firefox.</li>
                <li>Att installera labbmiljö var inte svårt för mig, fick klara mig ganska snabb.</li>
                <li>Jag är bekant med Html och css men inte med php.</li>
                <li>Det gick bra, inget var svårt men nügot var konstig när man kör kmom01 i en localhost dü css filen inte uppdaterar tills man ladda om filen via: http://localhost:8080/dbwebb/webtec/me/kmom01/public/css/style.css</li>
                <li>Det är PHP och att jobba med en terminal</li>
            </ol>
        </article>
        <hr>

        <article>
            <h2 id="kmom02">kmom02</h2>
            <p>
                För mig så är jag ganska bra att styla en bra hemsida, men alltid har ett problem med färger säkert 
                under tiden kommer jag att bli bättre med det. Att jobba med vanilla CSS är något jobbigt och svårt 
                jag tycker då istället väljer jag alltid att jobba med SASS då den är lätt, smidigt och blir man mer 
                strukturerad och har bättre förståelse av hur HTML elementet är strukturerad. Man också slipper att ha
                många css filer utan man kan ha allt i en fil även i vissa fall man inte behöver att ha många klasser
                då kan man specificera det direkt genom att navigera till det elementet man vill ändra stilen på.
                Något viktig att veta när SASS ska använda är att man skapar en fil som heter fil_namn.scss. Filen 
                style.scss måste blir omvandlat till css format, det kan man göra med att ha ett extension som gör
                detta. Ett bra extension i VS Code kallas för “Live sass compiler”. Viktig oxå att veta när compiler
                körs så skapar den till dig två filer, den första “fil_namn.css” och den andra “fil.css.map”, 
                vår ändringar hamnar i “fil_namn.scss” och vi linkar “fil_namn.css” ivår html document. 
                När jag börja med att styla en hemsida då vänder jag mig direkt till Figma, där jag planerar och 
                testar tills jag blir nöjd med en styl, efter jag har planerat klart hur min sida ska ser ut då 
                börjar jag och ändra på min SASS code tills jag nå det jag planerad. Jag börjar först med strukturen
                sedan lägger till färger och bilder som behövs. För denna kursmomentet så följer jag till stor del
                min planering, det är bara småsaker som saknas med annars det ser lika samma ut. Det var ett problem 
                jag hade med att XAMPP inte visar ändringar direkt på css filen utan man måste starta om XAMPP ibland.
                Men!, jag hittade ett lösning då jag startar en php server direkt ifrån VS code. Också när man laddar 
                upp sin uppgift det tar långt tid att css tillämpas, lösningen jag hittade var att går in till css filen
                på server “dbwebb-kurser/webtec/me/report/public/css/style.css” och ladda om sidan då kmr css och ändras 
                direkt.
            </p>
        </article>
        <hr>

        <article>
            <h2 id="kmom03">kmom03</h2>
            <p>Här kommer redovisningstexten för detta kursmoment.</p>
        </article>
        <hr>
        
        <article>
            <h2 id="kmom04">kmom04</h2>
            <p>Här kommer redovisningstexten för detta kursmoment.</p>
        </article>
        <hr>
        
        <article>
            <h2 id="kmom05">kmom05</h2>
            <p>Här kommer redovisningstexten för detta kursmoment.</p>
        </article>
        <hr>
        
        <article>
            <h2 id="kmom06">kmom06</h2>
            <p>Här kommer redovisningstexten för detta kursmoment.</p>
        </article>
        <hr>
        
        <article>
            <h2 id="kmom10">kmom10</h2>
            <p>Här kommer redovisningstexten för detta kursmoment.</p>
        </article>
    </div>
    <aside>
        <h4>innehållsförteckning</h4>
        <ul>
            <li><a href="#kmom01">kmom01</a></li>
            <li><a href="#kmom02">kmom02</a></li>
            <li><a href="#kmom03">kmom03</a></li>
            <li><a href="#kmom04">kmom04</a></li>
            <li><a href="#kmom05">kmom05</a></li>
            <li><a href="#kmom06">kmom06</a></li>
            <li><a href="#kmom10">kmom10</a></li>
        </ul>
    </aside>
</main>

<?php include('../view/footer.php') ?>
