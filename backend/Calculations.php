<?php
    header("Access-Control-Allow-Origin: *");
    require('File.php');
    
    $file = new File();
    echo json_encode($file->get_records());
?>