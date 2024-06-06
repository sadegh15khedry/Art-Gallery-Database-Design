<?php
session_start();
require_once "../php/DataBaseClass.php";
$content_type = $_GET['c'];
$database_obj = DataBase::getInstance();


if ($content_type=='0'){
    $results = $database_obj->getSectionContent('0');
    echo $results;
}
else if ($content_type=='1'){
    $results = $database_obj->getSectionContent('1');
    echo $results;
}
else if ($content_type=='2'){
    $results = $database_obj->getSectionContent('2');
    echo $results;
}
else if ($content_type=='3'){
    $results = $database_obj->getSectionContent('3');
    echo $results;
}
else if ($content_type=='4'){
    $results = $database_obj->getSectionContent('4');
    echo $results;
}
else if ($content_type=='5'){
    $results = $database_obj->getSectionContent('5');
    echo $results;
}
else if ($content_type=='6'){
    $results = $database_obj->getSectionContent('6');
    echo $results;

}
else if ($content_type=='7'){
    $results = $database_obj->getSectionContent('7');
    echo $results;

}
else if ($content_type=='8'){
    $results = $database_obj->getSectionContent('8');
    echo $results;

}
else if ($content_type=='9'){
    $results = $database_obj->getSectionContent('9');
    echo $results;
}




?>