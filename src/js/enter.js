jQuery(function($){
    $('#load').load('../html/head.html #nav')

    var $enroll=$('input').first();
    var $user=$('.user').first();


    $enroll.on('blur',function(){
        var text=$enroll[0].value;
        $.ajax({
            type:'get',
            url:'../api/user.php?',
            data:{text:text},
            success:function(res){
                console.log(res);
                if(res=='no'){
                    if(text==''){
                        return;
                    }else{
                        $user.html('用户不存在');
                    }
                }
            }
        })
    });


    var numCode;
    var $code=$('.code');
    numCode=numberCode();

    $code.html(numCode);

    console.log($code);
    var $number=$(':text').last();

    $('.see').on('click',function(){
        numCode=numberCode();
        $code.html(numCode);
    });

    var $num=$('.num');
    $number.on('blur',function(){
        var text=this.value;
        console.log(text);
        if(text==numCode){
            return;
        }else{
            $num.html('验证码不正确');
        }
    })


});
