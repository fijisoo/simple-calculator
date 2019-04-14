<?php

class UserInfo {
    public static function get_user_ip() {
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
            return $_SERVER['HTTP_CLIENT_IP'];
        }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        return $_SERVER['REMOTE_ADDR'];
    }

    public static function get_user_agent() {
        return $_SERVER['HTTP_USER_AGENT'];
    }

    public static function get_date() {
        return date("Y.m.d");
    }
}

?>