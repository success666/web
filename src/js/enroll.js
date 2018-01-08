jQuery(function($){
    $('#load').load('../html/head.html #nav')
    var $enroll=$('input').first();
    

    var username=document.querySelector('.phone');
    var span=document.querySelector('.user');
    var _username;
    username.onblur=function(){
        _username=username.value;
        if(_username==''){
            return;
        }
        console.log(_username);
        var reg1=/^[1][34578]\d{9}$/;
        var reg2=/^[a-z][\w\-\.]{5,17}@[a-z0-9\-]{2,}(\.[a-z]{2,}){1,2}$/;
        if(reg1.test(_username) || reg2.test(_username)){
            $.ajax({
                url:'../api/mySQL/enter.php',
                data:{
                    username:_username
                },
                success:function(data){
                    if(data == 'fail'){
                        span.innerHTML='用户'+_username+'可以注册';
                        span.style.color='green';
                    }
                    else if(data == 'ok'){
                        span.innerHTML='用户'+_username+'已经存在';
                        span.style.color='red';
                    }
                }
            })
        }else{
            span.innerHTML='格式不正确';
        }
    }

    var word=document.querySelectorAll('.user')[1];
    word.style.top='50px';
    var parsword=document.querySelector('.pars');
    var _password;
    parsword.onblur=function(){
        _password=parsword.value;
        var reg=/^[a-zA-Z]\w{5,15}$/;
        if(reg.test(_password)){
            word.innerText='密码符合要求';
        }else{
            word.innerText='密码不符合要求';
        }
    }

    var again=document.querySelector('.again');
    var againSpan=document.querySelectorAll('.user')[2];
    again.onblur=function(){
        var _again=again.value;
        if(_again==_password){
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
    $(btn).on('click',function(){
        _username=username.value;
        _password=parsword.value;
        $.ajax({
                url:'../api/mySQL/enroll.php',
                data:{
                    username:_username,
                    password:_password
                },
                success:function(data){

                    console.log(data);
                    if(data == 'fail'){
                        $(numCode).text('用户名已经存在');
                        return;
                    }
                    $(numCode).text('注册成功,马上去登陆');
                    setTimeout(()=>{
                        location.href = 'enter.html';
                    },2000);
                }
            })
    });
    

});
