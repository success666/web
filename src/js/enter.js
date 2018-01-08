jQuery(function($){
    $('#load').load('../html/head.html #nav')

    var $enroll=$('input').first();
    var $user=$('.user').first();

    var username;
    $enroll.on('blur',function(){
        username=$enroll[0].value;
        if(username==''){
            $user.html('请输入密码用户名');
            return;
        }
        $.ajax({
            url:'../api/mySQL/enter.php',
            data:{
                username:username
            },
            success:function(data){
                if(data == 'fail'){
                    $user.html('用户'+username+'不存在');
                    $user.css({color:'red'});
                }else if(data=='ok'){
                    $user.html('请输入登录密码').css({color:'green'});
                }
            }
        })
    });

    var $pass=$('.users');
    var $init=$('.init').last();
    var password;
    console.log($init);
    $init.on('blur',function(){
        password=$init.val();
        if(password==''){
            $pass.html('请输入密码');
        }
    })

 
    //验证码
    var numCode;
    var $code=$('.code');
    numCode=numberCode();
    $code.html(numCode);

    // 点击更换验证码
    $('.see').on('click',function(){
        numCode=numberCode();
        $code.html(numCode);
    });

    var $number=$(':text').last();
    var $num=$('.num');
    // 判断输入验证码是否正确
    $number.on('blur',function(){
        var text=this.value;
        if(text==numCode){

            // 输入验证码正确时才可以登录
            var $btn=$('button');
            console.log($btn);
            $btn.on('click',function(){
                username=$enroll[0].value;
                password=$init.val();
                $.ajax({
                    url:'../api/mySQL/enter01.php',
                    data:{
                        username:username,
                        password:password
                    },
                    success:function(data){
                        console.log(data)
                        if(data == 'fail'){
                            alert('用户名或密码错误')
                        }
                        else if(data == 'ok'){
                            location.href = './html/index';
                        }
                    }
                })

            })

            
        }else{
            $num.html('验证码不正确');
        }
    })





});
