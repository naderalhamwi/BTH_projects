<?php
$month = date("m");
$year = date("Y");
$days = date("t");
$monthName = date("F");

$begin = new DateTime("$year-$month-01");

$end = new DateTime("$year-$month-$days");

$input_date = $_GET['find_month'] ?? null;

$_SESSION['counter'] = 0;
$_SESSION['counter_year'] = 0;
$_SESSION['counter'] = (!$_SESSION['counter']) ? 0 : $_SESSION['counter'];
$_SESSION['counter_year'] = (!$_SESSION['counter_year']) ? 0 : $_SESSION['counter_year'];
$_SESSION['counter_weeK'] = (!$_SESSION['counter_weeK']) ? 0 : $_SESSION['counter_weeK'];

$_SESSION['counter_weeK'] = $begin->modify('first day of this month')->format('W');

if (isset($_GET['next'])) {
    $_SESSION['counter']++;
    $r = $_SESSION['counter'];
    $month = date("m", strtotime("+$r month"));
    $monthName = date("F", strtotime("+$r month"));
    if ($month == 1) {
        $_SESSION['counter_year']++;
        $v = $_SESSION['counter_year'];
        $year = date("Y", strtotime("+$v year"));
    } else {
        $j = $_SESSION['counter_year'];
        $year = date("Y", strtotime("+$j year"));
    }
    $days = cal_days_in_month(CAL_GREGORIAN, $month, date("Y", strtotime("+$j year")));
    $test = "$year-$month-01";
    $begin = new DateTime($test);
    $end   = new DateTime("$year-$month-$days");
    $_SESSION['counter_weeK'] = $begin->modify('first day of this month')->format('W');
} elseif (isset($_GET['previous'])) {
    $_SESSION['counter']--;
    $r = $_SESSION['counter'];
    $month = date("m", strtotime("+$r month"));
    $monthName = date("F", strtotime("+$r month"));
    if ($month == 1) {
        $_SESSION['counter_year']--;
        $v = $_SESSION['counter_year'];
        $year = date("Y", strtotime("+$v year"));
    } else {
        $j = $_SESSION['counter_year'];
        $year = date("Y", strtotime("+$j year"));
    }
    $days = cal_days_in_month(CAL_GREGORIAN, $month, date("Y", strtotime("+$j year")));
    $test = "$year-$month-01";
    $begin = new DateTime($test);
    $end   = new DateTime("$year-$month-$days");
    $_SESSION['counter_weeK'] = $begin->modify('first day of this month')->format('W');
} elseif (isset($_GET['find_month'])) {
    $dateStr = htmlentities($input_date);
    $timestamp = strtotime($dateStr);
    if ($timestamp) {
        $month = date("m", $timestamp);
        $monthName = date("F", $timestamp);
        $year = date("Y", $timestamp);
        $days = date("t", $timestamp);
    } else {
        $month =  date("m", mktime(0, 0, 0, $input_date, 1));
        $monthName =  date("F", mktime(0, 0, 0, $input_date, 1));
        $days = cal_days_in_month(CAL_GREGORIAN, $input_date, $year);
    }
    $begin = new DateTime("$year-$month-01");
    $end   = new DateTime("$year-$month-$days");
    $_SESSION['counter_weeK'] = $begin->modify('first day of this month')->format('W');
} elseif (isset($_GET['clear'])) {
    $month = date("m");
    $year = date("Y");
    $days = date("t");

    $begin = new DateTime("$year-$month-01");
    $end   = new DateTime("$year-$month-$days");

    $_SESSION['counter'] = 0;
    $_SESSION['counter_year'] = 0;
    $_SESSION['counter_weeK'] = $begin->modify('first day of this month')->format('W');
}

$day_num = 1;
$day_nam = date("l");
?>

<main class="month_calendar_style">
    <form method="get">
        Search for full date or month: <input type="text" value="<?= $input_date ?>" name="find_month"><br>
    </form>
    <h1><?= $monthName ?> / <?= $year ?></h1>
    <form method="get">
        <input type="submit" value="< previous month" name="previous">
        <input type="submit" value="Today" name="clear">
        <input type="submit" value="Next month >" name="next">
    </form>
    <img src="https://picsum.photos/500/250" alt="picsum.photos" style="width: 50%;">
    <table>
        <tr>
            <th></th>
            <th>day</th>
            <th>week</th>
        </tr>
        <?php
        if ($day_nam == "Monday" || $day_num == 1) {
            for ($i = $begin; $i <= $end; $i->modify('+1 day')) {
                $day_nam =  $i->format("l");
                ?>
                <tr>
                    <?php
                    if (date("m") == $month && date("d") == $day_num && date("Y") == $year) {
                        ?>
                        <td><?= $day_num ?></td>
                        <td style="color:green;"><?= $day_nam ?></td>
                        <td></td>
                        <?php
                    } elseif ($day_nam == "Monday") {
                        if ($_SESSION['counter_weeK'] == 52) {
                            $_SESSION['counter_weeK'] = 0;
                        }
                            $_SESSION['counter_weeK']++;
                        ?>
                        <td><?= $day_num ?></td>
                        <td><?= $day_nam ?></td>
                        <td><?=$_SESSION['counter_weeK']?></td>
                        <?php
                    } elseif ($day_nam == "Sunday" || $day_nam == "Saturday") {
                        if ($day_num == 1) {
                            ?>
                            <td style="color:red;"><?= $day_num ?></td>
                            <td style="color:red;"><?= $day_nam ?></td>
                            <td><?=$_SESSION['counter_weeK']?></td>
                            <?php
                        } else {
                            ?>
                            <td style="color:red;"><?= $day_num ?></td>
                            <td style="color:red;"><?= $day_nam ?></td>
                            <td></td>
                            <?php
                        }
                    } elseif ($day_num == 1) {
                        ?>
                        <td><?= $day_num ?></td>
                        <td><?= $day_nam ?></td>
                        <td><?=$_SESSION['counter_weeK']?></td>
                        <?php
                    } else {
                        ?>
                        <td><?= $day_num ?></td>
                        <td><?= $day_nam ?></td>
                        <td></td>
                        <?php
                    }
                    ?>
                </tr>
                <?php
                $day_num++;
            }
        }
        ?>
    </table>
</main>