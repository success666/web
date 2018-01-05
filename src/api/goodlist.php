<?php

    $id=isset($_GET['id'])? $_GET['id'] : 'null';


    $path='../json/shopping.json';

    $file=fopen($path,'r');

    $content=fread($file,filesize($path));

    $content=json_decode($content);


    $arr=[];
    for($i=0;$i<count($content);$i++){
        if($content[$i]->id==$id){
            $arr[]=$content[$i];
            // echo $arr;
            echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        }
    }


?>