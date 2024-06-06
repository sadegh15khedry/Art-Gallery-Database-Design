<?php

session_start();
require_once "../php/DataBaseClass.php";
$database_obj = DataBase::getInstance();

$content_type = $_GET['c'];
$x1 = $_GET['x1'];

//$results = $database_obj->getFuncFunction('1',$x1);
//echo $results;

if ($content_type=='1'){
    $results = $database_obj->getFuncFunction('1',$x1);
    echo $results;
}
else if ($content_type=='2'){
    $results = $database_obj->getFuncFunction('2',$x1);
    echo $results;
}
else if ($content_type=='3'){
    $results = $database_obj->getFuncFunction('3',$x1);
    echo $results;
}
else if ($content_type=='4'){
    $results = $database_obj->getFuncFunction('4',$x1);
    echo $results;
}
else if ($content_type=='5'){
    $results = $database_obj->getFuncFunction('5',$x1);
    echo $results;
}
else if ($content_type=='6'){
    $results = $database_obj->getFuncFunction('6',$x1);
    echo $results;
}
else if ($content_type=='7'){
    $results = $database_obj->getFuncFunction('7','');
    echo $results;
}
else if ($content_type=='8'){
    $results = $database_obj->getFuncFunction('8',$x1);
    echo $results;
}
else if ($content_type=='9'){
    $results = $database_obj->getFuncFunction('9',$x1);
    echo $results;
}
else if ($content_type=='10'){
    $results = $database_obj->getFuncFunction('10',$x1);
    echo $results;
}

