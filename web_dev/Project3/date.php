<?php
echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l") . "<br>";
?> 

<?php
date_default_timezone_set("America/New_York");
echo "The time is " . date("h:i:sa") . "<br>";
?> 



<?php
$d=mktime(11, 14, 54, 8, 12, 2014);
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?> 

<?php
$current_timestamp = time();
echo $current_timestamp;
?>