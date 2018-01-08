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



    $('.active').on('click',function(){
        location.href='./goodlist.html?id='+id;
    })
});
