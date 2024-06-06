<?php

session_start();
require_once "../php/DataBaseClass.php";
$database_obj = DataBase::getInstance();

$content_type = $_GET['c'];
$x1 = $_GET['x1'];
$x2 = $_GET['x2'];
$x3 = $_GET['x3'];
$x4 = $_GET['x4'];
$x5 = $_GET['x5'];
$x6 = $_GET['x6'];


if ($content_type=='1'){
    $results = $database_obj->getSpFunction('1',$x1,'','','','','');
    echo $results;
}
else if ($content_type=='2'){
    $results = $database_obj->getSpFunction('2',$x1,$x2,$x3,$x4,$x5,'');
    echo $results;
}
else if ($content_type=='3'){
    $results = $database_obj->getSpFunction('3',$x1,$x2,$x3,$x4,$x5,$x6);
    echo $results;
}
else if ($content_type=='4'){
    $results = $database_obj->getSpFunction('4',$x1,$x2,$x3,$x4,$x5,'');
    echo $results;
}
else if ($content_type=='5'){
    $results = $database_obj->getSpFunction('5',$x1,$x2,'','','','');
    echo $results;
}
else if ($content_type=='6'){
    $results = $database_obj->getSpFunction('6','','','','','','');
    echo $results;
}
else if ($content_type=='7'){
    $results = $database_obj->getSpFunction('7',$x1,'','','','','');
    echo $results;
}
else if ($content_type=='8'){
    $results = $database_obj->getSpFunction('8',$x1,'','','','','');
    echo $results;
}
else if ($content_type=='9'){
    $results = $database_obj->getSpFunction('9',$x1,'','','','','');
    echo $results;
}
else if ($content_type=='10'){
    $results = $database_obj->getSpFunction('10',$x1,'','','','','');
    echo $results;
}