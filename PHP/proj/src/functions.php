<?php

/**
 * This function to conect to the databse
 *
 * @return object as the database connection object.
 */
function connectToDatabase(string $dsn): object
{
    try {
        $db = new PDO($dsn);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo "Failed to connect to the database using DSN:<br>'$dsn'<br>";
        throw $e;
    }

    return $db;
}

/**
 * This get all articles in database or get last tow published
 */
function get_all_article(string $select = "All")
{
    // Create a DSN for the database using its filename
    $fileName = "../db/bmo.sqlite";
    if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
        $fileName = "C:\db\bmo.sqlite";
    }

    $dsn = "sqlite:$fileName";
    $db = connectToDatabase($dsn);

    // Create the SQL statement
    $sql = <<<EOD
    SELECT *
    FROM article;
    EOD;
    $stmt = $db->prepare($sql);

    $stmt->execute();

    $res = $stmt->fetchAll();

    if ($select == "last_on_date") {
        // Create the SQL statement
        $sql = <<<EOD
        SELECT * 
        FROM article 
        WHERE pubdate = (SELECT MAX(pubdate) FROM article) LIMIT 3;
        EOD;
        $stmt = $db->prepare($sql);

        $stmt->execute();

        $res = $stmt->fetchAll();
        ?>
            <table>
                <tr><td><h2>Senaste Articlar</h2></td></tr>
                <?php
                foreach ($res as $row) :
                    $clearContent = substr(str_replace(array('<p>','</p>'), '', $row['content']), 0, 100);
                    ?>
                    <tr>
                        <td>
                            <a href="selected_articel.php?id=<?=$row['id']?>&title=<?=$row['title']?>">
                                <p><?=$row['pubdate']?></p>
                                <h3><?=$row['title']?></h3>
                            </a>
                        </td>
                    </tr>
                <?php endforeach?>
                <tr><td><a href="artiklar.php">Se alla atriklar</a></td></tr>
            </table>
        <?php
    } else if ($select == "4") {
        // Create the SQL statement
        $sql = <<<EOD
        SELECT * 
        FROM article 
        WHERE id = 4;
        EOD;
        $stmt = $db->prepare($sql);

        $stmt->execute();

        $res = $stmt->fetch();

        echo ($res['content']);
    } else if ($select == "4_part_of_text") {
        // Create the SQL statement
        $sql = <<<EOD
        SELECT * 
        FROM article 
        WHERE id = 4;
        EOD;
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetch();
        $clearContent = substr(str_replace(array('<p>','</p>','<h2>','</h2>'), '', $res['content']), 0, 200);
        ?>
            <p><?=$clearContent?>...<a href="selected_articel.php?id=<?=$res['id']?>&title=<?=$res['title']?>">Läsa mer!</a></p>
        
        <?php
    } else {
        foreach ($res as $row) :
            $clearContent = substr(str_replace(array('<p>','</p>','<h2>','</h2>'), '', $row['content']), 0, 100);
            ?>
            <a href="selected_articel.php?title=<?=$row['title']?>&id=<?=$row['id']?>" class="show_article_txt_part">
                <div>
                    <h1><?=$row['title']?></h1>
                    <p><?=$clearContent?>....</p>
                    <p><?=$row['pubdate']?></p>
                </div>
            </a>
        <?php endforeach;
    }
}

/**
 * This get all object och spicifk number of object, $showPartRow if true show only 6 object
 */
function get_all_object(string $showPartRow = "false")
{
    // Create a DSN for the database using its filename
    $fileName = "../db/bmo.sqlite";
    if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
        $fileName = "C:\db\bmo.sqlite";
    }
    $dsn = "sqlite:$fileName";
    $db = connectToDatabase($dsn);

    if ($showPartRow == "true") {
        // Create the SQL statement
        $sql = <<<EOD
        SELECT *
        FROM Object LIMIT 6;
        EOD;
    } else {
        // Create the SQL statement
        $sql = <<<EOD
        SELECT *
        FROM Object;
        EOD;
    }

    $stmt = $db->prepare($sql);

    $stmt->execute();

    $res = $stmt->fetchAll();

    ?>
        <div>
            <?php
            foreach ($res as $row) : ?>
                <a href="selected_object.php?id=<?=$row['id']?>&title=<?=$row['title']?>">
                    <div class="object_container">
                        <img src="../public/img/250x250/<?=$row['image']?>" alt="img">
                        <h3 class="centered"><?=$row['title']?></h3>
                    </div>
                </a>
            <?php endforeach;
            ?>
        </div>
    <?php
}

/**
 * This search in database after the search input
 */
function search($searchInput)
{
    $renSearchWord = str_replace(array('%'), '', $searchInput);
    // Create a DSN for the database using its filename
    $fileName = "../db/bmo.sqlite";
    if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
        $fileName = "C:\db\bmo.sqlite";
    }
    $dsn = "sqlite:$fileName";
    $db = connectToDatabase($dsn);

    // Create the SQL statement
    $sqlArticle = <<<EOD
    SELECT * 
    FROM article 
    WHERE 
        title LIKE ?
    EOD;
    $sqlObject = <<<EOD
    SELECT * 
    FROM object 
    WHERE 
        title LIKE ?
    EOD;

    $stmtArticle = $db->prepare($sqlArticle);
    $stmtObjectl = $db->prepare($sqlObject);

    $args = ["%$renSearchWord%"];

    $stmtArticle->execute($args);
    $stmtObjectl->execute($args);

    $resArticle = $stmtArticle->fetchAll();
    $resObject = $stmtObjectl->fetchAll();

    if ($resArticle || $resObject) {
        if ($resArticle) {
            ?>
            <table>
                <tr><td><h2>Articlar</h2></td></tr>
                <?php
                foreach ($resArticle as $row) :
                    ?>
                    <tr>
                        <td>
                            <a href="selected_articel.php?id=<?=$row['id']?>&title=<?=$row['title']?>">
                                <p><?=$row['pubdate']?></p>
                                <h3><?=$row['title']?></h3>
                            </a>
                        </td>
                    </tr>
                <?php endforeach?>
                <tr><td><a href="artiklar.php">Se alla atriklar</a></td></tr>
            </table>
            <?php
        }
        if ($resObject) {
            ?>
            <div>
                <?php
                foreach ($resObject as $row) : ?>
                    <a href="selected_object.php?id=<?=$row['id']?>&title=<?=$row['title']?>">
                        <div class="object_container">
                            <img src="../public/img/250x250/<?=$row['image']?>" alt="img">
                            <h3 class="centered"><?=$row['title']?></h3>
                        </div>
                    </a>
                <?php endforeach;
                ?>
            </div>
            <?php
        }
    } else {
        ?>
            <main class="search_not_found">
                <div>
                    <p>Hittar inget i med din sökning! "<?=$renSearchWord?>"</p>
                </div>
            </main>
        <?php
    }
    ?>
    <div class="botom">
            <a href="#">Upp</a>
        </div>
    <?php
}

/**
 * This get the selected article
 */
function selected_article($articleId)
{
    // Create a DSN for the database using its filename
    $fileName = "../db/bmo.sqlite";
    if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
        $fileName = "C:\db\bmo.sqlite";
    }
    $dsn = "sqlite:$fileName";
    $db = connectToDatabase($dsn);

    // Create the SQL statement
    $sql = <<<EOD
    SELECT *
    FROM Article
    WHERE 
        id = ?;
    EOD;

    $stmt = $db->prepare($sql);

    $args = [$articleId];

    $stmt->execute($args);

    $res = $stmt->fetch();

    $clearContent = str_replace(array('<p>','</p>'), '', $res['content']);

    ?>
        <div class="show_selected_article">
            <h2><?=$res['title']?>:</h2>
            <p><?=$clearContent?></p>
            <?php
            if ($res['author']) {
                ?>
                    <p>Author: <?=$res['author']?></p>
                <?php
            } else {
                ?>
                    <p>Author: unkown</p>
                <?php
            }
            ?>
            <p>Date: <?=$res['pubdate']?></p>
        </div>
    <?php
}

/**
 * This get the selected object
 */
function selected_object($objectId)
{
    // Create a DSN for the database using its filename
    $fileName = "../db/bmo.sqlite";
    if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
        $fileName = "C:\db\bmo.sqlite";
    }
    $dsn = "sqlite:$fileName";
    $db = connectToDatabase($dsn);

    // Create the SQL statement
    $sql = <<<EOD
    SELECT *
    FROM object
    WHERE 
        id = ?;
    EOD;

    $stmt = $db->prepare($sql);

    $args = [$objectId];

    $stmt->execute($args);

    $res = $stmt->fetch();

    ?>
        <div class="show_selected_object">
            <h2><?=$res['title']?></h2>
            <img src="../public/img/full-size/<?=$res['image']?>">
            <p><?=$res['text']?></p>
            <p>Owner: <?=$res['owner']?></p>
        </div>
    <?php
}