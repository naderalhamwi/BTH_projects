<?php
$title = 'Redovisningstexter';

include('../config/config.php');
include('../view/header.php');
?>

<main>
    <h1>Redovisning</h1>

    <ul>
        <li><a href="#kmom01">kmom01</a></li>
        <li><a href="#kmom02">kmom02</a></li>
        <li><a href="#kmom03">kmom03</a></li>
        <li><a href="#kmom04">kmom04</a></li>
        <li><a href="#kmom05">kmom05</a></li>
        <li><a href="#kmom06">kmom06</a></li>
        <li><a href="#kmom10">kmom10</a></li>
    </ul>

    <h2 id="kmom01">kmom01</h2>

    <p>Kmom01 är att bygga en enkel webbplats där eleverna redovisa och dela deras skoluppgifter.</p>

    <p>Här nedan är svar pü frågor om den kursmoment:</p>

    <ol>
        <li><strong>Operativsystem:</strong> Windows 10, <strong>Texteditor</strong>: VS code, <strong>localhost</strong>: XAMMP, <strong>Termenal</strong>: Ubuntu, <strong>Webbläsare</strong>: firefox.</li>
        <li>Att installera labbmiljö var inte svårt för mig, fick klara mig ganska snabb.</li>
        <li>Jag är bekant med Html och css men inte med php.</li>
        <li>Det gick bra, inget var svårt men nügot var konstig när man kör kmom01 i en localhost dü css filen inte uppdaterar tills man ladda om filen via: http://localhost:8080/dbwebb/webtec/me/kmom01/public/css/style.css</li>
        <li>Det är PHP och att jobba med en terminal</li>
    </ol>


    <h2 id="kmom02">kmom02</h2>

    <p>Här kommer redovisningstexten för detta kursmoment.</p>


    <h2 id="kmom03">kmom03</h2>

    <p>Här kommer redovisningstexten för detta kursmoment.</p>


    <h2 id="kmom04">kmom04</h2>

    <p>Här kommer redovisningstexten för detta kursmoment.</p>


    <h2 id="kmom05">kmom05</h2>

    <p>Här kommer redovisningstexten för detta kursmoment.</p>


    <h2 id="kmom06">kmom06</h2>

    <p>Här kommer redovisningstexten för detta kursmoment.</p>


    <h2 id="kmom10">kmom10</h2>

    <p>För kursmoemnt 10 så ska man utveckla ett program för att öva på att skriva snabbt.
Det var vis antal kram man måste uppfylet och att kursmomenten blir gödkän, kraven var att:
Man ska ha ett väl fungrrande program, kodstrukturen ska ha en main fil som programmet utgåifrån och ha minst två olika moduler som har functioner till programmet, man ska också visa resultat till användaren på ett bra sätt. Resultatet i slutet av träningen är fel i procent man gjört, det man skriv fel. 
</p>
<p>Min program uppfyller de kraven övan. För kod stukturen så valde jag att göra en ren sktriktor som är lätt och följa. strukturen jag valde var att man har main filen under kmom10, sedan har jag lägt till en src fil där allt annat ligget. I src filen så fins det tree stycken filer save, typing och appManager. typing är filen där inehålla alla text filer med texten som man tränar. appManager är en python fil som inehåller alla functioner som programmet behöver för att fungerar rätt. I save filen som fins det score.txt där användaren resultat sparas och en till fil saveManager som tar had om och spara datan i score.txt filen.
Räkna ut prestation och poäng valde jag och göra följande:
</p>
<pre>Congrats! You finish the training on level: easy
Fel tecken  
[('m', 1), ('i', 1), ('e', 1), ('t', 1), ('s', 1)]
procentuellt fel 4%
total tid: 230.1s
Score: 480
WPM: 40
1) save score
Enter to return to main menu
-->  
</pre>
<p>Man kan se vilken nivå man genomfört, alla fel teken som gjört samt i procent, tid som togs att genomföra träningen, score då varje mening får man 100 pöang, WPM stor för Word Per Menute.</p>
<p>Man också kan välja att spara resultat eller att skipa och gå tillbaka till start menu, Väljer man att spara så får man en liten medelande som ser ut såhär: 
<br>Enter your name to save to highscore: <br>
Vid sparning av resultatet så ser det ut så här:<br>
nader: Score: 480. Fel i procent: 4%. Level: easy<br>
I score filen ser man sin pogäng, fel i procent och vilken nivå man genomförat.<br>
</p>
<p>Jag försökte och göra mitt bästa med att ha en fullfungerande program utan bugs. Gjört många tester och ändringar tills jag fick resultatet som jag är nöjd med och kan säga att nu har jag en full fungerande program. Det som tog långt tid och fixa vara att programmet inte visar rätt resultat och ibland krachar när man skriver meningen utan mellanslag eller om man skriva mindre än angiven mening. Det fixade jag med att lägga till tomma täcken i slutet av användarens mening tex:
</p>
<p>angiven mening: I fear Not the man who
användaren skriver: IfearNotthemanwho
då lägger jag '' till användarens mening tills det blir lika långt som angiven mening. då kan jag kollar att allt förre '' är lika till angiven mening. 
</p>
<p>Jag valde att lägga till en av de extra kraven: det var tidtagning för träningen. Att visa tiden som togs av användaren och genomföra träningen var viktig och lätt att ligga till i programmet. jag valde att har det enkelt, då räknar jag tiden med att spara start tiden på träningen sedan sparar jag tiden i slutet av träningen, och efter det subtraherar jag klar tiden av start tiden så får jag exakt tiden som användaren genomfört träningen.
</p>
<p>Denna kursmomenten känner jag att programmet viskapade var rimlig till det vi lärde oss underkursen, inget svåregheter, det är bara att man kan missa lite för hur python strukturen är det komemr säker efter mycket träning.Jag onskade mer tid då kunde jag fixa de andra extra kraven, och kanske förbättra min kod.
</p>
<p>Jag tyktye om kursen, och hur mycket hjälp det fanns bode på dbwebb.se och discord samt github. Validering av kursmomentena och fel som visar var tydliga, då kan man följa var felen är och kunna fixa det utan problem. Jag är väldingt nöjd med kursen hur det gick till. Man fick mycket bra hjälp och snabba svar på frågor.
</p>
</main>

<?php include('../view/footer.php') ?>
