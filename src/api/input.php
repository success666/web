<?php
    
    $username=isset($_GET['_username'])? $_GET['_username'] : 'null';


    $arr=array('18218861437','13527007546','864696717@qq.com','13586876967','182188881437');
    
    if(in_array($username,$arr)){
        echo 'yeas';
    }else{
        echo 'no';
    }

?>