jQuery(function($){
    var $enroll=$('input').first();
    $('#load').load('../html/head.html #nav')
    

    var username=document.querySelector('.phone');
    var span=document.querySelector('.user');
    username.onblur=function(){
        var _username=username.value;
        if(_username==''){
            return;
        }
        console.log(_username);
        var xhr=new XMLHttpRequest();
        var reg1=/^[1][34578]\d{9}$/;
        var reg2=/^[a-z][\w\-\.]{5,17}@[a-z0-9\-]{2,}(\.[a-z]{2,}){1,2}$/;
        if(reg1.test(_username) || reg2.test(_username)){
            xhr.onreadystatechange=function(){
                if(xhr.readyState===4){
                    var judge=xhr.responseText;
                    if(judge=='no'){
                        span.innerHTML='用户'+_username+'可以注册';
                        span.style.color='green';
                    }else if(judge=='yeas'){
                        span.innerHTML='用户'+_username+'太受欢迎了';
                        span.style.color='red';
                    }
                }
            }
            xhr.open('get','../api/input.php?_username='+_username,true);
            xhr.send();
        }else{
            span.innerHTML='格式不正确';
        }
    }

    var word=document.querySelectorAll('.user')[1];
    word.style.top='50px';
    var parsword=document.querySelector('.pars');
    var _parsword;
    parsword.onblur=function(){
        _parsword=parsword.value;
        var reg=/^[a-zA-Z]\w{5,15}$/;
        if(reg.test(_parsword)){
            word.innerText='密码符合要求';
        }else{
            word.innerText='密码不符合要求';
        }
    }

    var again=document.querySelector('.again');
    var againSpan=document.querySelectorAll('.user')[2];
    again.onblur=function(){
        var _again=again.value;
        if(_again==_parsword){
            againSpan.innerText='success';
        }else{
            againSpan.innerText='前后密码不一致';
        }
    }

    var number=document.getElementsByClassName('number')[0];
    var num=number.nextElementSibling;
    var randomNum;
    randomNum=numberCode();
    num.innerText=randomNum;

    var look=document.getElementsByClassName('look')[0];
    look.onclick=function(){
        randomNum=numberCode();
        num.innerText=randomNum;
    }

    var numCode=document.getElementsByClassName('numberCode')[0];
    number.onblur=function(){
        var _number=number.value;
        if(_number===randomNum || _number==''){
            return;
        }else{
            numCode.innerHTML='验证码不正确';
            console.log('验证码不正确');
        }
    }

    var $check=$(':checkbox');
    var check1=$check[0];
    var check2=$check[1];
    var btn=document.querySelector('.btn');
    btn.on('click',function(){
        // $.ajax({
        //         url:'../api/mysql/zhuce.php',
        //         data:{
        //             username:_username,
        //             password:_password,
        //             phone:_phoneNumber,
        //             email:_emailNumber
        //         },
        //         success:function(data){
        //             if(data == 'fail'){
        //                 $('.result').text('用户名已经存在');
        //                 return;
        //             }
        //             $('.result').text('注册成功,马上去登陆');
        //             setTimeout(()=>{
        //                 location.href = 'login.html';
        //             },2000);
        //         }
        //     })
    });
    


});
