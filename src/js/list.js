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

    var $goods=$('#goods')
    var page=1;
    var qty=10;
    $.ajax({
        type:'get',
        url:'../api/list.php',
        data:{page:1,qty:10},
        success:function(res){
            res=JSON.parse(res);

            var $page=$('.page');
            var num=Math.ceil(res.total/qty);
            for(var i=1;i<=num;i++){
                var $span=$('<span/>');
                $span.html(i);
                $span.addClass('spanpage');
                $page.append($span);
            }

            $goods.html(res.data.map(function(item){
                return `
                    <li data-guid="${item.id}">
                        <img src="${item.img}" alt="">
                        <div>
                            <p>${item.name}</p>
                            <p>${item.title}</p>
                            <p>${item.result}</p>
                            <button>${item.btn}</button>
                        </div>
                    </li>
                        `
            }).join(''));



            $page.on('click','.spanpage',function(){
                var spans=this.parentNode.children
                var lenght=spans.length;
                console.log(lenght);
                for(var i=0;i<lenght;i++){
                    spans[i].style.background='#ccc';
                }
                this.style.background='red';
                page=this.innerText;
                $.ajax({
                    type:'get',
                    url:'../api/list.php',
                    data:{page:page,qty:10},
                    success:function(res){
                        res=JSON.parse(res);
                        $goods.html(res.data.map(function(item){
                            return `
                                <li data-guid="${item.id}">
                                    <img src="${item.img}" alt="">
                                    <div>
                                        <p>${item.name}</p>
                                        <p>${item.title}</p>
                                        <p>${item.result}</p>
                                        <button>${item.btn}</button>
                                    </div>
                                </li>
                                    `
                        }).join(''));
                    }
                })
            })

            
            $goods.on('click','li',function(){
                var id=this.getAttribute('data-guid');

                location.href='./datalist.html?data='+id;
            })
            
        }
    })


});
