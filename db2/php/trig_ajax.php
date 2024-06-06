<?php

session_start();
require_once "../php/DataBaseClass.php";
$database_obj = DataBase::getInstance();

$content_type = $_GET['c'];

if ($content_type=='1'){
    $results = $database_obj->getTrigfunction('1');
    echo $results;
}
else if ($content_type=='2'){
    $results = $database_obj->getTrigfunction('2');
    echo $results;
}
else if ($content_type=='3'){
    $results = $database_obj->getTrigfunction('3');
    echo $results;
}
else if ($content_type=='4'){
    $results = $database_obj->getTrigfunction('4');
    echo $results;
}
else if ($content_type=='5'){
    $results = $database_obj->getTrigfunction('5');
    echo $results;
}
else if ($content_type=='6'){
    $results = $database_obj->getTrigfunction('6');
    echo $results;
}
else if ($content_type=='7'){
    $results = $database_obj->getTrigfunction('7');
    echo $results;
}
else if ($content_type=='8'){
    $results = $database_obj->getTrigfunction('8');
    echo $results;
}
else if ($content_type=='9'){
    $results = $database_obj->getTrigfunction('9');
    echo $results;
}
else if ($content_type=='10'){
    $results = $database_obj->getTrigfunction('10');
    echo $results;
}