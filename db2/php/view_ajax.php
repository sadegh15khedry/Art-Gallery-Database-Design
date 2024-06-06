<?php

session_start();
require_once "../php/DataBaseClass.php";
$content_type = $_GET['c'];
$database_obj = DataBase::getInstance();



if ($content_type=='1'){
    $results = $database_obj->getViewFunction('1');
    echo $results;
}

else if ($content_type=='2'){
    $results = $database_obj->getViewFunction('2');
    echo $results;
}
else if ($content_type=='3'){
    $results = $database_obj->getViewFunction('3');
    echo $results;
}
else if ($content_type=='4'){
    $results = $database_obj->getViewFunction('4');
    echo $results;
}
else if ($content_type=='5'){
    $results = $database_obj->getViewFunction('5');
    echo $results;
}
else if ($content_type=='6'){
    $results = $database_obj->getViewFunction('6');
    echo $results;

}
else if ($content_type=='7'){
    $results = $database_obj->getViewFunction('7');
    echo $results;

}
else if ($content_type=='8'){
    $results = $database_obj->getViewFunction('8');
    echo $results;

}
else if ($content_type=='9'){
    $results = $database_obj->getViewFunction('9');
    echo $results;
}

else if ($content_type=='10'){
    $results = $database_obj->getViewFunction('10');
    echo $results;
}

else if ($content_type=='11'){
    $results = $database_obj->getViewFunction('11');
    echo $results;
}

else if ($content_type=='12'){
    $results = $database_obj->getViewFunction('12');
    echo $results;
}

else if ($content_type=='13'){
    $results = $database_obj->getViewFunction('13');
    echo $results;
}

else if ($content_type=='14'){
    $results = $database_obj->getViewFunction('14');
    echo $results;
}

else if ($content_type=='15'){
    $results = $database_obj->getViewFunction('15');
    echo $results;
}