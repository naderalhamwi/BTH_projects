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
            <p>
            Det var mycket och tänka på när man jobbar med CRUD i den kursmoment. CRUD står för Create, Read, Update and Delete.
            Efter den korsmoment lärde jag mig att skapa ett sida som hanterar användarens inlogning och utlogning. Även skapning av 
            ny konto eller radering konton. inget mer speciferat då admin inte är riktig admin som kan radera eller ändra på andra användare.
            Det var basic sparande av användarens data. Men viktig och ha hashat lösenord vid skapning av ny användare!.
            Uppgiften var inte jätte svårt, medan det var mycket och skriva och ändringar på min gammal kod.
            Nu med inlogningen så kan jag visa spicifika inehåll till de som loggade in. Det jag tänkte på var att ha en välkommn sida
            där presenteras lite info om sidan, loggar man in så kommer resten av information att visasa upp, Då är det de roliga 
            spel vi skapade under kursen och mina redovinsnig text.
            Min sida behöver förbättringar som jag vill att göra under min fritid. det är mest stylen, annars sidan saknar inte så myckt.
            </p>
        </article>
        <hr>
        
        <article>
            <h2 id="kmom10">kmom10</h2>
            <p>För denna projectet så implemnterade jag de grundläggande karv för projectet. grundkraven var att ha en stil och layout som speglar sidan syfte, att läsa från databasen med hjälp av pdo, att använda samma katalogstruktur som används under kursmoment, att presentera objekterna och artiklarmna på ett trevligt sätt och att ha ett responsiv webbplats. 
                För grund kraven så känner jag mig att jag har nått de jätte bra. Sidan är responsiv för olika skärm storlik. webbplatsen visar sitt inehåll på ett organeserat sätt. och gällande kud struktur så följade jag den. webbsidan är byggt på ett enkelt sätt men ändå är ett stabelt webbplats. Jag försökte att hantera allt möjligt jag kunde tänka på med felhantering, fel sök resultat eller inmatad sök ord. 
                Jag har gjort bara två functioner som läser av databa ifrån databasen. Sedan skicade jag med parameter ifall jag behövde hämta något specefikt, den standart värde på parameter var "All" då hämtas allt av vald tabell. så om jag inte skickar något parameter när jag anropar fonctoionen så dne bara hämtar allt, annars gjorde jag tt jag skickat tillexempel "last_on_date" så att jag hämtar de senaste artiklar. på min css så användade jag classer satt jag lätta ha bättre kontroll på stylen av varje element.
                Jag gjorde enkelt sök motor som kan söka efter titlen på varje object och artilke i  itabellerna. och hanterade felmedelande på ett sätt jag ser att den är bra. Vist kunde jag göra att man kan söka också på annat som författare etc, men jag valde att ha ett enkelt och snabbt fonctionaletet så att jag har mer tid att göra min sida mer stabelt och förbättra stylen.
                Projectet var remligt tyker jag, utan det käns som man inte hade mycket tid, tanken är man har oxå andra kurser, så man inte hinner göra allt i tid.  Kaske om vi fick ett till vecka kan det blir bättre så har man tid och tänka och planera mer hur sitt sida ska se ut och hur koden ska struktureras på bästa sättet. Men överallt så är inget i projectet som inte vi vet och känner.
                Det var inte jätte många problen jag träffade utan det var hur content på databasen sparades. jag har använd miga av str_replace() för att kunna bli av med extra teken. vist kunde man skapa om databasen men jag känner att min lösning kan fungerar även men andra ökänna databaser!. Man kanske hämtar databasen från annan server och inte kan ändra på det så tänkte jag med den lösningen är bäst.
                Något som jag hade problem med innan var att stylen inte visas upp derikt när man ändrar på css filen. Men hittade lösning på det och det var att när man ska ladda om sidan så använder man CTRL+F5 då fungerar stylen derikt. Detta problemet hade jag när jag opnade sidan med XAMPP.
                Jag tyktye om kursen, och hur mycket hjälp det fanns bode på dbwebb.se och discord samt github. Något jag känner att måste förbättras är när det gäller validering, då ibland blir det inte tydligt vilka filer som saknas och vart exakt. Jag är väldingt nöjd med kursen hur det gick till. Man fick mycket bra hjälp och snabba svar på frågor.
            </p>
        </article>
        <hr><br>

        <?php include('../view/byline.php') ?>
    </div>
</main>

<?php include('../view/footer.php') ?>
