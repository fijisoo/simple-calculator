<?php
    header("Access-Control-Allow-Origin: *");
    require('File.php');
    require('UserInfo.php');

    if(isset($_GET['sum'])) {
        $file = new File(true);

        $userIP = UserInfo::get_user_ip();
        $userAgent = UserInfo::get_user_agent();
        $date = UserInfo::get_date();

        $file->write_to_file(
            array(
                $_GET['sum'],
                $date,
                $userIP,
                $userAgent
            )
        );
        $file->close_file();
    }

?>