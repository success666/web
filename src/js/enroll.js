jQuery(function($){
    var $enroll=$('input').first();
    console.log($enroll);
    $('#load').load('../html/head.html #nav')
    

    var username=document.querySelector('.phone');
    var span=document.querySelector('.user');
    console.log(username);console.log(666);
    username.onblur=function(){
        var _username=username.value;
        if(_username==''){
            return;
        }
        console.log(_username);
        var xhr=new XMLHttpRequest();

        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                var judge=xhr.responseText;
                console.log(judge);
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
    }

    var word=document.querySelectorAll('.user')[1];
    word.style.top='50px';
    var parsword=document.querySelector('.pars');
    var _parsword;
    parsword.onblur=function(){
        _parsword=parsword.value;
        console.log(_parsword);
        var reg=/^[a-zA-Z]\w{5,15}$/;
        if(reg.test(_parsword)){
            word.innerText='密码符合要求';
        }else{
            word.innerText='密码不符合要求';
        }
    }

    var again=document.querySelector('.again');
    var againSpan=document.querySelectorAll('.user')[2];
    console.log(againSpan);
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
    console.log(numCode);
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
    console.log(check1,check2);
    var btn=document.querySelector('.btn');
    if(check1.checked==true && check2.checked==true){
        btn.disabled = false;//可用
    }else{
        btn.disabled = true;// 禁用
    }

});
