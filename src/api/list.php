<?php
    
    $page=isset($_GET['page'])? $_GET['page'] : 1;
    $qty=isset($_GET['qty'])? $_GET['qty'] : 5;


    $path='../json/goods.json';

    $file=fopen($path,'r');

    $content=fread($file,filesize($path));

    $content=json_decode($content);

    fclose($file);

    // $res=array_slice($content,($page-1)*$qty,$qty);

    // var_dump($res);

    $arr=array(
        'data'=>array_slice($content,($page-1)*$qty,$qty),
        'total'=>count($content)
        );


    echo json_encode($arr,JSON_UNESCAPED_UNICODE);


        

?>