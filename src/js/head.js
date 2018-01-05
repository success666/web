jQuery(function($){
            $('.my').hover(
                function () {
                    $('.height').animate({height: '150px'},1000);
                },
                function () {
                    $('.height').animate({height: '0px'},1000);
            });

            $('.buycar').hover(
                function () {
                    $('.car').fadeIn();
                },
                function () {
                    $('.car').fadeOut();
            });

            var ele=document.querySelector('#top');
            // console.log(ele);
            scrollTop(ele);

            var $span;
            function showMove(ele,text){
                ele.hover(
                    function(){
                        $span=$('<span/>');
                        $span.css({
                            display:'block',
                            height:30,
                            width:100,
                            background:'#000',
                            position:'absolute',
                            left:'-150px',
                            top:0,
                            fontSize:14,
                            display:'none',
                            opacity:0.5
                        })
                        var $i=$('<i/>');
                        console.log($i)
                        $i.css({
                            display:'block',
                            position:'absolute',
                            left:'100px',
                            top:8,
                            border:'5px solid transparent',
                            borderLeft:'5px solid #000'
                        })
                        $span.html(text)
                        $span.appendTo($(this));
                        $i.appendTo($span);

                        $span.fadeIn().animate({left: '-110px',opacity:1},200);
                    },
                    function(){
                        $span.fadeOut();
                })
            }

            //我的账号
            var $wode=$('.icon-wode').last().css({position:'relative'});
            var text1='我的账号';
            showMove($wode,text1);

            //我的收藏
            var $xin=$('.icon-xin').last();
            var text2='我的收藏';
            showMove($xin,text2);

            //浏览记录
            var $copy=$('.icon-xiaofeijilu-copy').last();
            var text3='浏览记录';
            showMove($copy,text3);

            //在线客服
            var $guan=$('.icon-guanjiaowangtubiao11').last();
            var text4='在线客服';
            showMove($guan,text4);

            var $top=$('#top').last();
            var text5='返回顶部';
            showMove($top,text5);

            var $p;
            $('.icon-weixin').hover(
                function(){
                    var $img=$('<img/>');
                    $img.attr({src:'../img/weinxin01.jpg'});
                    $img.css({
                        height:100,
                        width:100
                    })
                    $p=$('<p/>');
                    $p.append($img);
                    $p.css({
                        border:'10px solid #ccc',
                        position:'absolute',
                        display:'none',
                        top:-32,
                        left:-200
                    })
                    $(this).append($p);
                    var $i=$('<i/>');
                    $i.css({
                        display:'block',
                        position:'absolute',
                        left:'110px',
                        top:40,
                        border:'14px solid transparent',
                        borderLeft:'14px solid #ccc'
                    })
                    $i.appendTo($p);

                    $p.fadeIn().animate({left: '-150px',opacity:1},200);
                },

                function(){
                    $p.fadeOut();
            });
            

            $('.shopping').on('click',function(){
                $('.shoppingcart').fadeIn();
            });

            $('.btn').on('click',function(){
                $('.shoppingcart').fadeOut();
            });

        })