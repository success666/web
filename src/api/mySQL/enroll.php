<?php
    include 'connect.php';
    
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '123456';
   
    var_dump($password);
    //用户名是否已经存在
    $sql = "select username from user where username='$username'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo "fail";
    }else{
        //加密
        $password = md5($password);
        
        $sql = "insert into user (username,password) values('$username','$password')";

        // 获取查询结果
        $result = $conn->query($sql);

        if ($result) {
            echo "ok";
        } else {
            echo "no";
        }
    }

    //关闭
    $conn->close();
?>