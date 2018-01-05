jQuery(function($){
    $('#head').load('./head.html',function(){
        $('.all li').css({

            display:'none'
        })
        $('.all').css({
            border:'0 none'
        })
        $('.all h2').css({
            border:'0 none'
        }).hover(function(){
            $('.all').css({
            border:'1 solid #ccc'
            })
            $('.all li').css({
            display:'block'
            })
        })
        $('.all').on('mouseleave',function(){
            $('.all li').css({
                display:'none'
            })
            $('.all').css({
                border:'0 none'
            })
        })
        
    });


    var id=location.search;
    var num=id.indexOf('=');
    var id=id.slice(num+1);

    var $imgarea=$('.img').css({
        position:'relative',
        float:'left'

    });
    $.ajax({
        type:'get',
        url:'../api/datalist.php',
        data:{'id':id},
        success:function(res){
            var res=JSON.parse(res);
            var $bgdiv=$('<div/>').addClass('goodss');
            var $bigimg=$('<img/>');
            $bigimg.attr({src:res[0].img,'data-big':res[0].img});
            $bgdiv.append($bigimg);
            $bgdiv.appendTo($imgarea);

          



            $bigimg.addClass('active');
            var imgUl=$('<ul/>')[0];
            imgUl.innerHTML=res[0].imgs.map(function(item){
                return  `
                        <li><img src="${item}" alt="" data-big="${item}"></li>
                        `
            }).join('');

            $(imgUl).appendTo($imgarea);


            $(imgUl).find('li').css({
                float:'left',
                height:140,
                width:150,
                boxSizing:'border-box',
                border:'1px solid #ccc'
            })
            $(imgUl).find('img').css({
                height:'100%',
                width:'100%',
                float:'left',
            })

            $(imgUl).css({
                width:$(imgUl).find('li').outerWidth()*5,
                height:$(imgUl).find('img').height(),
                position:'absolute',
                left:0,
                top:420,


            })



            var $sale=$('#sale');
            $sale.html(res.map(function(item){
                return `
                    <li data-guid="${item.id}">
                        <p>${item.name}</p>
                        <p>${item.title}</p>
                        <p id="role"></p>
                        <p><span class="sell">${item.sell}</span><span class="outprice">${item.outsell}</span><button id="sub">-</button>数量:<span id="number">1</span><button id="add">+</button></p>
                        <p>${item.result}</p>
                        <button id="btn">${item.btn}</button>
                    </li>
                        `
            }).join(''));

            $('#sub').on('click',function(){
                var $num=$('#sub').next();
                var $text=$num.html();
                $text--
                if($text<=1){
                    $text=1;
                }
                $num.html($text);
            })

            $('#add').on('click',function(){
                var $num=$('#add').prev();
                var $text=$num.html();
                $text++
                $num.html($text);
            })

            $sale.find('li').css({
                padding:8,
                height:585,
                width:617,
                float:'left'
            })

            $sale.find('p').css({
                fontSize:30,
                lineHeight:'80px'
            })

            $('#role').html(res[0].role.map(function(item){
                return `<span>${item}</span>`;
            }).join('')).on('click','span',function(){
                var spans=$('#role').find('span')
                for(var i=0;i<spans.length;i++){
                    $(spans[i]).css({
                        background:'#fff'
                    })
                }
                $(this).css({
                    background:'#E93B78'
                })
            });




            var $prev=$('.prev');
            var $next=$('.next');
            var $left;
            $prev.on('click',function(){
                $left=$(imgUl).offset().left-1
                if($left<=-$(imgUl).find('li').outerWidth()){
                    $left=0;
                }
                $(imgUl).css({
                    left:$left-$(imgUl).find('li').outerWidth()
                })
            })


            $next.on('click',function(){
                $left=$(imgUl).offset().left-1;
                console.log($left);
                if($left>=-$(imgUl).find('li').outerWidth()){
                    $left=-$(imgUl).find('li').outerWidth();
                }
                $(imgUl).css({
                    left:$left+$(imgUl).find('li').outerWidth()
                })
            })

            var lis=$(imgUl).find('li');
            var len=lis.length;

            $(imgUl).on('click','img',function(){
                var src=$(this).attr('src');
                $bigimg.attr({src:src,'data-big':src})
                for(var i=0;i<len;i++){
                    lis[i].style.borderColor='#ccc';
                }
                $(this).parent('li').css({
                    borderColor:'red'
                })
            })



            var $number=$('#number')
            var idxs=0;
            $('#btn').on('click',function(){
                var $numbertext=$number.text();
                var left=$bigimg.offset().left;
                var top=$bigimg.offset().top;
                var car=$('.shopping');
                var $carleft=car.offset().left;
                var $cartop=car.offset().top;
                $bigimg.css({
                    position:'absolute',
                    zindex:10
                })
                var $cloneimg=$bigimg.clone(true);
                $('.img').append($cloneimg);
                $cloneimg.animate({left:$carleft,top:$cartop-150,width:50,height:40},2000,function(){
                    $cloneimg.remove();
                    var $buycar=$('.shoppingcart');
                    $buycar.find('span.removespan').remove();
                    var $car=$('#buycar');


                    if(idxs==0){
                        var $carp=$('<p/>')

                        $carp.html(
                        `<img src="${res[0].img}" alt="" class="fl carimg">
                        <span>${res[0].name}</span><br>
                        <span>${res[0].result}</span><br>
                        <span>${res[0].title}</span><br>
                        <span>原价: ${res[0].outsell}</span> <span>现价: ${res[0].sell}</span>  数量<span id="shulang">${$numbertext}</span><br>
                        <button class="position">x</button>`
                       );
                        $carp.appendTo($car);
                        idxs++;
                    }else{
                        var shu=$('#shulang').text();
                        shu++;
                        $('#shulang').html(shu);
                    }


                    var $carp=$('<p/>');
                    $carp.html(res.map(function(item){
                        
                        return`
                    <img src="${item.img}" alt="" class="fl carimg">
                    <span>${item.name}</span><br>
                    <span>${item.result}</span><br>
                    <span>${item.title}</span><br>
                    <span>原价: ${item.outsell}</span> <span>现价: ${item.sell}</span>数量<span>${$numbertext}</span><br>
                    <button class="position">x</button>

                    `
                    }).join(''));
                    $('.car').html('<button class="gocar">进入购物车</button>');
                    $carp.appendTo($('.car'));


                    $carp.css({
                        border:'1 solid #000',
                        height:120,
                        position:'relative'
                    })
                    $('.position').on('click',function(){
                        $(this).parent('p').remove();
                    })
                });
                
                
            
            });

        }
    })

    $('.zoom').on('click',function(){
        location.href='../html/dataimg?id='+id;
    })
});
