<?php
$title = 'Redovisningstexter';

include('../config/config.php');
include('../view/header.php');
?>

<main class="asideLeft mainWithAside">
    
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
            För mig så är jag ganska bra att styla en bra hemsida, men alltid har ett problem med färger säkert under tiden kommer jag att bli bättre med det. Att jobba med vanilla CSS är något jobbigt och svårt jag tycker då istället väljer jag alltid att jobba med SASS då den är lätt, smidigt och blir man mer strukturerad och har bättre förståelse av hur HTML elementet är strukturerad. Man också slipper att ha många css filer utan man kan ha allt i en fil även i vissa fall man inte behöver att ha många klasser då kan man specificera det direkt genom att navigera till det elementet man vill ändra stilen på.Något viktig att veta när SASS ska använda är att man skapar en fil som heter fil_namn.scss. Filen style.scss måste blir omvandlat till css format, det kan man göra med att ha ett extension som gör detta. Ett bra extension i VS Code kallas för “Live sass compiler”. Viktig oxå att veta när compiler körs så skapar den till dig två filer, den första “fil_namn.css” och den andra “fil.css.map”, vår ändringar hamnar i “fil_namn.scss” och vi linkar “fil_namn.css” ivår html document. När jag börja med att styla en hemsida då vänder jag mig direkt till Figma, där jag planerar och testar tills jag blir nöjd med en styl, efter jag har planerat klart hur min sida ska ser ut då börjar jag och ändra på min SASS code tills jag nå det jag planerad. Jag börjar först med strukturen sedan lägger till färger och bilder som behövs. För denna kursmomentet så följer jag till stor del min planering, det är bara småsaker som saknas med annars det ser lika samma ut. Det var ett problem jag hade med att XAMPP inte visar ändringar direkt på css filen utan man måste starta om XAMPP ibland. Men!, jag hittade ett lösning då jag startar en php server direkt ifrån VS code. Också när man laddar upp sin uppgift det tar långt tid att css tillämpas, lösningen jag hittade var att går in till css filen på server “dbwebb-kurser/webtec/me/report/public/css/style.css” och ladda om sidan då kmr css och ändras direkt.
            </p>
        </article>
        <hr>

        <article>
            <h2 id="kmom03">kmom03</h2>
            <p>
            PHP är nytt språk för mig, allt jag gjort har jag lärt mig som hur php inblandad med html, 
            php loopar, variabler och if satser. Det var svårt i början att förstå hur det funkar, 
            men efter att spendera bra tid med och testa så lär man sig php.  Den var inte jätte svårt 
            som jag tänkte innan men ibland blir man förvirrad då är det lite svårt och följa variabelns 
            liv. På min början av programmering så hamnade jag med att göra ett MVC projekt med .Net, jag 
            lärde mig grunden av MVC men fortsätt inte med det då var det fel val att börja med C# som första 
            programmeringsspråk. Då vände jag mig till Java. Så har lite bakgrund hur det funkar och hur det 
            ser ut med MVC projekt innan. PHP Get och querysträngen var något nytt också. Men det var lätt 
            och veta hur det funkar. Jag gjort mitt uppgift på det lättaste sättet, användande enkla 
            funktionalitet ändå kunde nå nästan uppgiftens mån. En ska saknas!,  Jag saknade veckonummer, det kunde jag inte göra 
            för alla veckor i år då får jag konstig resultat och veckonummer inte stämmer när den ska skrivas för 
            veckan före och efter. På grund av att jag satt länge med att försöka kunna göra veckonummer då tappade 
            jag tid och kunna försöka med att göra extrauppgifter. Jag antar att om jag ville lägga till veckonummer 
            till min kalender så ska jag skriva om hela min php fil satt jag har det från början. Jag kommer att sitta 
            och försöka kunna lägga till veckonummer på min kalender så fort jag kan så att jag har ett klart uppgift 
            innan nästa vecka. Samt kan göra extra uppgifter!.   
            2022-10-02, uppdateras calander sida då min calander har nu veckonummer som stämmer rätt!.
            </p>
        </article>
        <hr>
        
        <article>
            <h2 id="kmom04">kmom04</h2>
            <p>
            ättet att spara i och hämta data från SESSION var något nytt sätt för mig, med Javascript så använder man localhost 
            för hämtning och lagring av enkel data. Det var inte svårt och arbeta med det, men känns lite jobbig då måste man starta 
            SESSION alltid annars får man ej data man ville. Funktioner är inte nya heller då är de lika med javascript. Det är bara 
            att man lägger till return type som är extra. För mig så väljer jag att ha min kod utan förbättringar nu. Men säkert det 
            behövs då kan det bli lättare och läsa koden lättare. Arrayer liknar och andra programmeringsspråk som javascript och python, 
            lagring och hämtning av data är samma också. HTML formulär med GET och POST ser man skillnaden med när man skickar in data. 
            Med GET så är datan allmän och kan visas på urlen, det är ej bra och skicka känslig data genom GET. Medan POSTdata syns inte 
            och är säkert!. Också  POST kan hantera mycket mer data än GET. Detta var något nytt jag lärde mig denna kmom, att arbeta med
            SESSION  och att kunna läsa data från CSV filer och hämta det value jag behöver med specifik nyckel. Jag anser att Jag löste 
            uppgiften bra till stor del, två saker saknas veckonummer och stilen på min kalender inte som önskades. Stilen och veckonummer 
            kommer jag förhoppningsvis klara de kommande dagarna. Och kan förbättra koden tänkte jag med funktioner och andra sätt att göra
            koden lättare och läsa. Jag känner om jag lyckades och göra de viktiga uppgifter i kort tid så kan göra de extra uppgifterna jag 
            fick. Just nu så har jag inte lagt tid på de extra uppgifterna, men de känns ej svåra.
            </p>
        </article>
        <hr>
        
        <article>
            <h2 id="kmom05">kmom05</h2>
            <p>
            Tidigare så har jag jobbat med MySQL som var kopplat till ett java backend. Då hämtades, sparades sökt eftet datan med JS fetch i 
            frontend. Nu är det lika som jag gjorde med kmom05. Då har man databas som ligger på server där man ska hämta det man söker efter. 
            Det som används var SQLite istället för MySQL. Sättet var inte jätte nytt för mig det var bara hur man kopplar med database med php. 
            Min lösning till uppgiften utgått ifrån övningen. Då byggde jag vidare eget kod som passerade mer på uppgiftens behov. Uppgiften som 
            jag tror har nått målet men det behövs lite förbättringar med stylen då ska den ser ut som sökmotor. Jag har inte gjort något extra uppgift 
            då var det trångt på tid för mig.Efter detta kursmoment så lärde jag mig hur SQlite används. Hur datan hämtas och läsas av databasen. 
            Hur visa upp det och göra det klickbar så man kan gå vidare till valdt namn. Just nu så går det inte att kunna hitta databasen då hittade
             jag ingen lösning till det än. Det går och hitta den lokalt även hämta data ur den men ej med student server.
            </p>
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
        <hr><br>

        <?php include('../view/byline.php') ?>
    </div>
</main>

<?php include('../view/footer.php') ?>
