<?php
    include('../config/config.php');

    $title = 'Om mig själv';

    // Set the timezone to use
    date_default_timezone_set('Europe/Stockholm');

    // The date of today
    $today = date('Y-m-d H:i:s');

    // Name of the week day
    $weekday = date('l');

    include('../view/header.php');
?>

<main class="mainWithAside">
    <div>
        
        <h1>Om Mig Själv</h1>
        <hr>
        

    <article>
        <h2>Hej!</h2>
        <p>Mitt namn är Nader Alhamwi. Född och uppvuxen i Syrien, Damascus, och nu bor jag i Växjö med min familj. </p>
        
        <p>Jag jobbade som butikssäljare i Coop i en liten by som heter Älghult, där jag bott innan jag flytatde till Växjö för två och halv år sedan. Nu jobbar jag som distributör under min extra tid på Pointlogistik, där jag delar lokala tidningar, brev och paket. Är inte gift än men planerar och gifta mig under kommande åren.</p>

        <p>Sedan jag var runt 13 år så började min intresse av programering att växa, 
        början var med Java sedan lärade min nya språk som C++, C# och JavaScript.</p>
        
        <p>Mitt hoppy är att bygga och testa ny och intresserande project i olika programering område som webbapplikation, data spel, mobilapplikation och skrivbordsapplikation. 
            Annat än det är och promenera ute mycket på ländet eller spela datorspel. </p>
        
            <p>Jag planerar och börja gymma någon gång under åren, eller börja något annat än det, kanske football.
                
                <p>Vi syns och hörs i forum och chatt!</p>
        </article>
    </div>
    <aside>
        <figure>
            <img src="img/naderAlhamwi.jpg" width="300" class="me" alt="Bild på mig">
            <figcaption>Nader Alhamwi</figcaption>
        </figure>
    </aside>
    </main>
    
    <?php include('../view/footer.php') ?>
    