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
$x7 = $_GET['x7'];
$x8 = $_GET['x8'];
$x9 = $_GET['x9'];
$x10 = $_GET['x10'];
$x11 = $_GET['x11'];
$x12 = $_GET['x12'];

if ($content_type=='1'){
    $results = $database_obj->getQfunction('1',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='2'){
    $results = $database_obj->getQfunction('2',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='3'){
    $results = $database_obj->getQfunction('3',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='4'){
    $results = $database_obj->getQfunction('4',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='5'){
    $results = $database_obj->getQfunction('5',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='6'){
    $results = $database_obj->getQfunction('6',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='7'){
    $results = $database_obj->getQfunction('7',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='8'){
    $results = $database_obj->getQfunction('8',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='9'){
    $results = $database_obj->getQfunction('9',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='10'){
    $results = $database_obj->getQfunction('10',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='11'){
    $results = $database_obj->getQfunction('11',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='12'){
    $results = $database_obj->getQfunction('12',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='13'){
    $results = $database_obj->getQfunction('13','','','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='14'){
    $results = $database_obj->getQfunction('14',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='15'){
    $results = $database_obj->getQfunction('15',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='16'){
    $results = $database_obj->getQfunction('16',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='17'){
    $results = $database_obj->getQfunction('17',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='18'){
    $results = $database_obj->getQfunction('18',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='19'){
    $results = $database_obj->getQfunction('19',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='20'){
    $results = $database_obj->getQfunction('20',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='21'){
    $results = $database_obj->getQfunction('21',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='22'){
    $results = $database_obj->getQfunction('22',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='23'){
    $results = $database_obj->getQfunction('23',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='24'){
    $results = $database_obj->getQfunction('24',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='25'){
    $results = $database_obj->getQfunction('25',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='26'){
    $results = $database_obj->getQfunction('26','','','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='27'){
    $results = $database_obj->getQfunction('27','','','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='28'){
    $results = $database_obj->getQfunction('28',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='29'){
    $results = $database_obj->getQfunction('29',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='30'){
    $results = $database_obj->getQfunction('30',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='31'){
    $results = $database_obj->getQfunction('31',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='32'){
    $results = $database_obj->getQfunction('32',$x1,'','','','','','','','','','','');
    echo $results;
}
else if ($content_type=='33'){
    $results = $database_obj->getQfunction('33',$x1,$x2,$x3,$x4,$x5,'','','','','','','');
    echo $results;
}
else if ($content_type=='34'){
    $results = $database_obj->getQfunction('34',$x1,$x2,$x3,$x4,$x5,$x6,$x7,$x8,$x9,$x10,$x11,$x12);
    echo $results;
}
else if ($content_type=='35'){
    $results = $database_obj->getQfunction('35',$x1,$x2,$x3,$x4,$x5,$x6,'','','','','','');
    echo $results;
}
else if ($content_type=='36'){
    $results = $database_obj->getQfunction('36',$x1,$x2,$x3,$x4,'','','','','','','','');
    echo $results;
}
else if ($content_type=='37'){
    $results = $database_obj->getQfunction('37',$x1,$x2,$x3,$x4,$x5,'','','','','','','');
    echo $results;
}
else if ($content_type=='38'){
    $results = $database_obj->getQfunction('38',$x1,$x2,$x3,$x4,$x5,$x6,'','','','','','');
    echo $results;
}
else if ($content_type=='39'){
    $results = $database_obj->getQfunction('39',$x1,$x2,$x3,$x4,$x5,'','','','','','','');
    echo $results;
}
else if ($content_type=='40'){
    $results = $database_obj->getQfunction('40',$x1,$x2,$x3,$x4,$x5,$x6,$x7,$x8,'','','','');
    echo $results;
}
else if ($content_type=='41'){
    $results = $database_obj->getQfunction('41',$x1,$x2,$x3,$x4,$x5,$x6,$x7,'','','','','');
    echo $results;
}
else if ($content_type=='42'){
    $results = $database_obj->getQfunction('42',$x1,$x2,$x3,$x4,'','','','','','','','');
    echo $results;
}
else if ($content_type=='43'){
    $results = $database_obj->getQfunction('43',$x1,$x2,'','','','','','','','','','');
    echo $results;
}
else if ($content_type=='44'){
    $results = $database_obj->getQfunction('44',$x1,$x2,'','','','','','','','','','');
    echo $results;
}
else if ($content_type=='45'){
    $results = $database_obj->getQfunction('45',$x1,$x2,'','','','','','','','','','');
    echo $results;
}