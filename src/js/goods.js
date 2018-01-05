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

    $('#foot').load('./foot.html');



    var $sale=$('#sale');
    $.ajax({
        type:'get',
        url:'../json/shopping.json',
        success:function(res){
            console.log(res);
            $sale.html(res.map(function(item){
                return `
                    <li data-guid="${item.id}">
                        <img src="${item.img}" alt="">
                        <div>
                            <p>${item.content}</p>
                            <p>${item.title}</p>
                            <p><span>${item.sell}</span><span>${item.outsell}</span></p>
                            <p>${item.sellnum}</p>
                            <button>${item.btn}</button>
                        </div>
                    </li>
                        `
            }).join(''));
        }
    })

    $sale.on('click','li',function(){
        var id=this.getAttribute('data-guid');

        location.href='./goodlist.html?data='+id;
    })

    


});



