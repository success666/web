
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
        overflow:'hidden',
        float:'left'

    });
    $.ajax({
        type:'get',
        url:'../api/goodlist.php',
        data:{'id':id},
        success:function(res){
            var res=JSON.parse(res);
            var $bigimg=$('<img/>');
            $bigimg.attr({src:res[0].img});
            $bigimg.appendTo($imgarea);
            $bigimg.addClass('active');
            var imgUl=$('<ul/>')[0];
            imgUl.innerHTML=res[0].imgs.map(function(item){
                return  `
                        <li><img src="${item}" alt=""></li>
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
                        <p>${item.content}</p>
                        <p>${item.title}</p>
                        <p id="role"></p>
                        <p><span class="sell">${item.sell}</span><span class="outprice">${item.outsell}</span></p>
                        <p>${item.sellnum}</p>
                        <button>${item.btn}</button>
                    </li>
                        `
            }).join(''));

            $sale.find('li').css({
                padding:8,
                height:601,
                width:617,
                float:'left'
            })

            $sale.find('p').css({
                fontSize:30,
                lineHeight:'60px'
            })

            $('#role').html(res[0].role.map(function(item){
                return `<span>${item}</span>`;
            }).join(''));



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
                $bigimg.attr({src:src})
                for(var i=0;i<len;i++){
                    lis[i].style.borderColor='#ccc';
                }
                $(this).parent('li').css({
                    borderColor:'red'
                })
            })
        }
    })

    $('.zoom').on('click',function(){
        location.href='../html/bimg.html?id='+id;
    })
});
