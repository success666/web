<?php
    include 'connect.php';
    
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    
    $sql = "select * from user where username='$username'";

    //查询结果
    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo 'ok';
    }else{
        echo 'fail';
    }

    $result->free();

    //关闭
    $conn->close();
?>