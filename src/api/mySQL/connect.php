<?php
    //创建链接
    $conn = new mysqli("localhost","root","","h5_1707");

    //检测链接
    if($conn->connect_error){
        die("链接失败：".$conn->connect_error);
    }
    $conn->set_charset('utf8');
    // $sql = "select * from `goods1`";
    // $result = $conn->query($sql);

    // $row = $result->fetch_all(MYSQLI_ASSOC);

    // $row = json_encode($row,JSON_UNESCAPED_UNICODE); 
    // echo $row;
?>