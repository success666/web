/**
 * [封装得到一个区间随机整数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [最小值与最大值之间的随机数（包含最小值最大值）]
 */
function randomNumber(min,max){

    var num=parseInt(Math.random()*(max-min+1))+min;
    //return 返回函数执行的地方
    return num;
}


//验证码 
/**
 * [得到随机四位数验证码]
 * @return {Number} [[随机验证码]
 */
function numberCode(){
    var code='';
    for(var i=0;i<4;i++){
        var number=parseInt(Math.random()*10);

        code+=number;
    }
        //return 返回函数执行的地方
        return code;
}


//随机颜色
/**
 * [得到一个随机颜色]
 * @return {String} [返回一个rgb格式的颜色]
 */
function randomColor(){
    var r=randomNumber(0,255);
    var g=randomNumber(0,255);
    var b=randomNumber(0,255);
    return 'rgb('+r+','+g+','+b+')';
    
}


/**
 * [点击显示隐藏]
 * @param  {node} ele [添加显示隐藏的元素]
 * @param  {node} btn [绑定点击事件的按钮元素]
 */
var show=true;
function display(ele,btn){
    // var text=btn.innerHTML;
    btn.onclick=function(){
        if(show){
            ele.style.display='none';
            btn.innerText='显示';
            show=false;
        }else{
            ele.style.display='block';
            btn.innerHTML='隐藏';
            show=true;
        }
    }

    //优化
    // ele.style.display=show? 'none' : 'block';
    // show = !show;
}



// 对象的封装方法  element
var element={
    /**
     * [得到元素的子代]
     * @param  {node} ele [节点]
     * @param  {String} idx [索引]
     * @return {node}     [对应的元素节点]
     */
    children:function(ele){
        var arr=ele.childNodes;
        var res=[];
        for(var i=0;i<arr.length;i++){
            var num=arr[i].nodeType;
            if(num===1){    
                res.push(arr[i]);
            }
        }
        return res;
    },
    /**
     * [得到相邻的下一个元素节点]
     * @param  {node}   ele [元素节点]
     * @return {node}     [相邻的下一个元素节点]
     */
    next:function(ele){
        var next=ele.nextSibling;
        // if(next.nodeType===1){
        //     return next;
        // }else if(next.nodeType===3){
        return next.nextSibling;
        // }
    },
    /**
     * [得到相邻的上一个元素节点]
     * @param  {node} ele [元素节点]
     * @return {node}     [相邻的上一个元素节点]
     */
    prev:function(ele){
        var prev=ele.previousSibling;
        // if(prev.nodeType===1){
        //     return prev;
        // }else if(prev.nodeType===3){
        return prev.previousSibling;
        // }
    },
    /**
     * [通过类名获取节点]
     * @param  {String} str [类名]
     * @return {Array}     [数组]
     */
    getByClassName:function(str){
        var arr=document.getElementsByTagName('*');
        var attr=[];
        for(var i=0;i<arr.length;i++){
            if(arr[i].className===str){
                attr.push(arr[i]);
            }
        }
        return attr;
    }
   
}



var cookie={
    /**
     * [获取cookie]
     * @param  {String} name [cookie名]
     * @return {String}      [返回name对应的cookie值]
     */
    get:function(name){
        //用于接收数据
        var arr='';
        //获取cookie
        var cookies=document.cookie;
        //判断cookie是否存在
        if(cookies.length){
            //存在则以'; '拆分 
            var cookies=cookies.split('; ');
            for(var i=0,len=res.length;i<len;i++){
                //以=拆分
                var res=cookies[i].split('=');
                if(res[0]==='name'){
                    //得到数组
                    arr=JSON.parse(res[1]);
                }
            }
        }
        return arr;
    },
    
    set:function(name,val,expries,path){
        var str=name+'='+val;
        if(expries){
            var str=';expries='+expries.toUTCString();
        }
        if(path){
            var str=';path='+path;
        }
        document.cookie=str;
    },

    remove:function(name){
        var now=new Data;
        now.setDate(now.getDate()-10);
        this.set(name,'null',now);
    }
    
}



/**
 * [返回顶部]
 * @param  {node} ele [绑定事件的节点]
 */
function scrollTop(ele){
    document.onscroll=function(){
        //获取滚动条滚动过的距离
        var scrollY=window.scrollY;
        //当滚动的距离大于600则显示按钮否则隐藏
        if(scrollY>=600){
            ele.style.display='block';
        }else{
            ele.style.display='none';
        }
        //绑定点击事件
        ele.onclick=function(){
            var timer=setInterval(function(){
                //不断获取滚动条滚动过的距离
                var scroll=window.scrollY;
                //定义速度
                var speed=scroll/10;
                //不断改变滚动条滚动过的距离
                scroll=scroll-speed;
                //当滚动过的距离少于30重置scroll=0 并清除定时器
                if(scroll<=30){
                    clearInterval(timer)
                    scroll=0;
                }
                window.scrollTo(0,scroll);
            },30);
        }
    }
}


/**
 * [动画改变透明度]
 * @param  {node} ele [改变透明度的节点]
 */
function overOut(ele){
    //定义全局变量用于清除定时器
    var timer;
    ele.onmouseover=function(){
        //清除前一个定时器
        clearInterval(timer);
        //定义目标值
        var target=1;
        timer=setInterval(function(){
            //获取当前的透明度   得到字符串（需要转成数字类型）
            var current=getComputedStyle(ele).opacity*1;
            //定义速度
            var speed=(target-current)/10;
            //当速度少于或等于0.05时重置speed
            if(speed<=0.05){
                speed=0.05;
            }
            //定义当前透明度
            var opacity=current+speed;
            //判断  清除当前定时器  并重置透明度
            if(speed <=0.05 || opacity >= target){
                clearInterval(timer);
                opacity = target;
            }
            ele.style.opacity=opacity;
        },60);
    }
    //上同
    ele.onmouseout=function(){
        //清除前一个定时器
        clearInterval(timer);
        //定义目标值
        var target=0.4;
        timer=setInterval(function(){
            //获取当前的透明度   得到字符串（需要转成数字类型）
            var current=getComputedStyle(ele).opacity*1;
            //定义速度
            var speed=(target-current)/10;
            //当速度少于或等于-0.05时重置speed
            if(speed<=-0.05){
                speed=-0.05;
            }
            //定义当前透明度
            var opacity=current+speed;
            //判断  清除当前定时器  并重置透明度
            if(speed <=-0.05 || opacity >= target){
                clearInterval(timer);
                opacity = target;
            }
            ele.style.opacity=opacity;
        },60);
    }
}


/**
 * [showCover description]
 * @param  {node} btn          [绑定点击事件的按钮]
 * @param  {node} box          [绑定动画的盒子]
 * @param  {number} targerHeight [盒子的目标值]
 */
function showCover(btn,box,targerHeight){
    var idx=0;
    var timer;
    btn.onclick=function(){
        if(idx===0){ 
            clearInterval(timer);
            timer=setInterval(function(){
                var height=box.offsetHeight;
                var speed=height/10;
                height-=speed;
                if(height<1 || speed<1){
                    clearInterval(timer)
                    height=0;
                }
                box.style.height=height+'px';
            },40);
            idx=1;
        }else{
            clearInterval(timer);
            timer=setInterval(function(){
                var target=targetHeight;
                var speeds=target/10;
                var height=box.offsetHeight;
                height+=speeds;

                if(height>=target){
                    clearInterval(timer)
                    height=target;
                }
                box.style.height=height+'px';
            },40);
            idx=0;
        }
    }
}


/**
 * [animat description]
 * @param  {node} ele [绑定动画的节点]
 * @param  {object} obj [改变css的对象]
 * @paran  {function} fn [回调函数]
 */
function animat(ele,obj,fn){
    //速度
    var speed=10;
    //对象的遍布
    for(let attr in obj){
        //提取css样式(当前值)
        var current=parseInt(getComputedStyle(ele)[attr]);
        //目标值
        var target=obj[attr];
        //根据不同的css样式起不同的名
        ele['timer'+attr]=setInterval(function(){

            if(current==target || current>=target){
                clearInterval(ele['timer'+attr]);
                current=target;
                if(typeof fn == 'function'){
                    fn();
                }
            }else if(current<target){
                current+=speed;
            }else if(current>target){
                current-=speed;
            }
            ele.style[attr]=current+'px';

        },200);
    }
}

// function(div,{hight:200},function(){
//      animat({width:400});
// });




//水平轮播图
/**
 * [animationSlide description]
 * @param  {node} div [如下]
 * @param  {node} ul  [如下]
 */

// <div class="box">
//     <ul>
//         <li><img src="img/001.jpg" alt="" /></li>
//         <li><img src="img/002.jpg" alt="" /></li>
//         <li><img src="img/003.jpg" alt="" /></li>
//         <li><img src="img/004.jpg" alt="" /></li>
//     </ul>
// </div>

function animationLevel(div,ul){
    //图片的宽度
    var imgWidht=ul.children[0].offsetWidth;
    console.log(imgWidht)
    //图片的数量
    var length=ul.children.length;
    //ul的宽度
    ul.style.width=imgWidht*length+'px';
    //全局索引值
    var idx=0;
    var timer;
    var animationTimer;

    var prev=document.createElement('p');
    prev.className='prev';
    prev.innerHTML='&gt;';

    var next=document.createElement('p');
    next.className='next';
    next.innerHTML='&lt;';

    div.appendChild(prev);
    div.appendChild(next);

    var p=document.createElement('p');
    p.className='active';
    for(var i=0;i<length;i++){
        var span=document.createElement('span');
        span.innerText=i+1;
        p.appendChild(span);
    }

    div.appendChild(p);
    p.children[0].style.background='green';

    div.onclick=function(e){
        e=e||window.event;
        var target=e.target||srcElement;
        if(target.className=='prev'){
            idx++;
            showimg();
        }else if(target.className=='next'){
            idx--;
            showimg();
        }else if(target.tagName.toLowerCase()==='span'){
            idx=target.innerText-1;
            showimg();
        }
    }

    timer=setInterval(autoplay,3000);

    function autoplay(){
        idx++
        showimg();
    }

    function showimg(){
        if(idx>=length){
            idx=0;
        }else if(idx<0){
            idx=0;
        }

        var target=-idx*imgWidht;
        clearInterval(animationTimer)

        animationTimer=setInterval(function(){
            var current=ul.offsetLeft;

            var speed=(target-current)/10;
            speed=speed>0? Math.ceil(speed) : Math.floor(speed);
            current+=speed;

            if(current==target){
                clearInterval(animationTimer)
                current=target;
            }
            ul.style.left=current+'px';

            for(var j=0;j<length;j++){
                p.children[j].style.background='#fff';
            }
            p.children[idx].style.background='green';

        },50);
    }

    div.onmouseenter=function(){
        clearInterval(timer);
    }
    div.onmouseleave=function(){
        timer=setInterval(autoplay,2000);
    }
}


//垂直轮播图
/**
 * [animationSlide description]
 * @param  {node} div [如下]
 * @param  {node} ul  [如下]
 */

// <div class="box">
//     <ul>
//         <li><img src="img/001.jpg" alt="" /></li>
//         <li><img src="img/002.jpg" alt="" /></li>
//         <li><img src="img/003.jpg" alt="" /></li>
//         <li><img src="img/004.jpg" alt="" /></li>
//     </ul>
// </div>

function verticalSlide(div,ul){
    //获取ul的长度    则图片的数量
    var length=ul.children.length;
    //图片的高度
    var imgheight=ul.children[0].offsetHeight;
    console.log(imgheight)
    //全局的索引值 
    var idx=0;
    //图片的转换
    var timer;
    //动画 
    var animationTimer;
    //生成左右按钮
    var prev=document.createElement('p');
    prev.innerHTML='&lt;';
    prev.className='prev';
    div.appendChild(prev);
    var next=document.createElement('p');
    next.innerHTML='&gt';
    next.className='next';
    div.appendChild(next);

    //点击左右按钮切换图片
    div.onclick=function(e){
        e=e||window.event;
        var target=e.target||srcElement;
        if(target.className=='prev'){
            idx--;
            imgshow();
        }else if(target.className=='next'){
            idx++;
            imgshow();

        //点击对应的数字切换到对应的图片
        }else if(target.tagName.toLowerCase()==='span'){
            idx=target.innerText-1;
            imgshow();
        }
    }

    //生成数字
    var p=document.createElement('p');
    p.className='active';
    for(var i=0;i<length;i++){
        var span=document.createElement('span');
        span.innerText=i+1;
        p.appendChild(span);
    }
    div.appendChild(p);
    //默认给第一个添加高亮
    p.children[0].style.background='red';


    //函数的调用 
    timer=setInterval(autoplay,2000);

    //函数的封装autoplay
    function autoplay(){
        idx++
        //函数的调用
        imgshow()
    }

    //函数的封装imgshow
    function imgshow(){
        if(idx>=length){
            idx=0;
        }else if(idx<0){
            idx=0;
        }

        var target=-idx*imgheight;
        //清除定时器
        clearInterval(animationTimer);

        animationTimer=setInterval(function(){
            //获取当前位置
            var current=ul.offsetTop;

            //定义速度
            var speed=(target-current)/10;

            //速度的处理
            speed=speed>0? Math.ceil(speed) : Math.floor(speed);

            current+=speed;

            if(current==target){
                //清除定时器
                clearInterval(animationTimer);
                //重置current
                current=target;
                // console.log(target);
            }
            ul.style.top=current+'px';

            //清除背景色
            for(var j=0;j<length;j++){
                p.children[j].style.background='#fff';
            }
            //给当前添加背景色
            p.children[idx].style.background='red';

        },40);
    }

    //鼠标移入移出
    div.onmouseenter=function(){
        clearInterval(timer);
    }
    div.onmouseleave=function(){
        timer=setInterval(autoplay,2000);
    }

}


/**
 * [animation description]
 * @param  {node}   ele [改变属性的节点]
 * @param  {object}   obj [属性的对象]
 * @param  {Function} fn  [回调函数]
 */
function animation(ele,obj,fn){
    //用于计算对象obj中属性的个数
    var qty=0;
    //遍历对象  attr对象obj的属性
    for(var attr in obj){
        qty++;
        //目标值
        var target=obj[attr];

        //定时器的名称（不同的属性用不同的名称方便清除定时器）
        var timerName=attr+'timer';

        // 清除之前的定时器,放置多个定时器作用于同一个元素
        clearInterval(ele[timerName]);

        //向定时器传attr
        !function(attr){
            ele[timerName]=setInterval(function(){
                //在定时器中不断获取当前值
                var current=getComputedStyle(ele)[attr];

                //match()替换后得到数组（用于提取单位）
                var unit=current.match(/\d([a-z]*)$/);

                //提取单位
                unit=unit? unit[1] : '';
                //速度
                
                // 提取数字
                current = parseFloat(current);

                var speed=(target-current)/10;
                //判断是否是透明度
                if(attr == 'opacity'){
                    speed>0? 0.05 : -0.05;
                }else{
                    speed>0? Math.ceil(speed) : Math.floor(speed);
                }

                //达到目标值后清除定时器
                if(current==target){
                    clearInterval(ele[timerName]);
                    //重置
                    current=target-speed;
                    //判断对象中的属性是否跑完
                    qty--
                    //当fn传进出的是函数则回调函数
                    if(typeof fn === 'function' && qty==0){
                        fn();
                    }
                }
                ele.style[attr]=current+speed+unit;
            },30);
        }(attr);
    }
    return;
}



 function ajax(obj){
    var objs={
        types:'get'
    }

    for(var attr in obj){
        objs[attr]=obj[attr];
    }
    //重置大小写
    objs.types=objs.types.toLowerCase();
    // console.log(objs);

    //防止多余的问号
    if(objs.url.indexOf('?')>=0){
        var idx=objs.url.indexOf('?');
        objs.url=objs.url.slice(0,idx);
    }
    // console.log(objs.data);
    //参数的拼接
    if(objs.data){
        var arguments='';
        for(var attr in objs.data){
            arguments+=attr+'='+objs.data[attr]+'&';
        }
        arguments='?'+arguments.slice(0,-1);
        // console.log(objs.url+arguments);
    }

    var xhr=new XMLHttpRequest();

    var status=[200];
    xhr.onload=function(){
        if(status.includes(xhr.status)){
                var res=xhr.responseText
                try{
                // console.log(JSON.parse(res));
                    res=JSON.parse(res);
                }catch(err){
                    res;
                }
            if(typeof objs.success == 'function'){
                objs.success(res)
            }
        }
    }

    console.log(objs.types,objs.url)
    if(objs.types=='get'){
        if(arguments){
            objs.url=objs.url+arguments
        }
        xhr.open(objs.types,objs.url,true);
        xhr.send();
    }else if(objs.types=='post'){
        xhr.open(objs.types,objs.url,true);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        if(arguments){
            xhr.send(arguments);
        }else{
            xhr.send();
        }
    }

}