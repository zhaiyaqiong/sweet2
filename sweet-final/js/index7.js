
/**
 * Created by wanda on 2016/11/29.
 */

$('#nav input.quan').click(function(){
    $("#nav input.quan").css('cursor','text');
    $('#nav input.quan').animate({width:'200px'},500)
})

$(document).keydown(function (event) {
    if(event.keyCode==13){
        if($('#nav input.quan').css('width')=='200px'){

            $('#nav input.quan').blur();
        }
    }
});


$('#nav input.quan').blur(function(){
    $('#nav input.quan').val('');
    $("#nav input.quan").css('cursor','pointer');
    $('#nav input.quan').animate({width:'28px'},500)
})

$('#foot ul li a').click(function(){
    $(this).parent().parent().children('.active').children().children().first().css('backgroundPositionX','0');
    $(this).parent().parent().children().removeClass('active');
    $(this).parent().addClass('active');
    if(window.innerWidth>1024){
        $(this).parent().parent().children('.active').children().children().first().css('backgroundPositionX','-38px');
    }else{
        $(this).parent().parent().children('.active').children().children().first().css('backgroundPositionX','-24px');
    }
})



$(window).on('scroll',function(){
    if($(window).scrollTop()>=$(document).height()-$(window).height()){
            var n=0;
            $.ajax({
                async:false,
                type:'GET',
                url:'js/data.json',
                success:function(data){
                    setTimeout(function(){
                        $.each(data,function(i){
                            //console.log(i+6*n);
                            if(i<6){
                                $('#donghua').after("<li><div class='left'><img src="+data[i+6*n].src+"></div><div class='right'><h1>"+data[i+6*n].ti+"</h1><p>"+data[i+6*n].details+"</p><div class='pandg'><span class='price'>￥"+data[i+6*n].price+"/磅 </span> <span class='go'> <b>购买</b><i></i> </span> </div> </div> </li>")
                            }else if(i>=6){
                                return false;
                            }
                        });
                        $('#donghua').animate({opacity:0},50,function(){//这里的时间不能太长，否则会同时看到动画和新加载的数据
                            $('#donghua').remove();
                            $('#list ul').append('<div class="maxdiv" id="donghua"><img src="images/girl.gif"></div>');
                        });
                    },500)
                }
            })
            n+=1;
    }
})






/*
$('body').on('touchend',function(){
    var n=0;
    //console.log('触摸结束');
    if($(window).scrollTop()>=$(document).height()-$(window).height()){
       // alert($('#donghua').css('display'));
        var a= localStorage.getItem('topval');
        if(a==1){
            $("#donghua").delay(800).slideUp(100,function(){
                $('#donghua').remove();
            }
                //var t = $(window).scrollTop();
                //$('body').animate({'scrollTop':t+100},500);
            );
            $.get('js/data.json',function(data){
                $.each(data,function(i){
                    if(i<6){
                        //alert(i+6*(n-1));
                        $('#donghua').after("<li><div class='left'><img src="+data[i+6*(n-1)].src+"></div><div class='right'><h1>"+data[i+6*(n-1)].ti+"</h1><p>"+data[i+6*(n-1)].details+"</p><div class='pandg'><span class='price'>￥"+data[i+6*(n-1)].price+"/磅 </span> <span class='go'> <b>购买</b><i></i> </span> </div> </div> </li>")
                    }else if(i>=6){
                        return false;
                    }
                });
                $('#list ul').append('<div class="maxdiv" id="donghua"><img src="images/girl.gif"></div>')
            });

        }
    }
    n+=1;
})

*/




/*
var n=0;
$('body').on('touchend',function(){
    if($("#donghua").css('display')=='block'){
        $('#donghua').slideUp(800,function(){
            $.get('js/data.json',function(data){
                $.each(data,function(i){
                    if(i<6){
                        //alert(i+6*(n-1));
                        $('#list ul').append("<li><div class='left'><img src="+data[i+6*(n-1)].src+"></div><div class='right'><h1>"+data[i+6*(n-1)].ti+"</h1><p>"+data[i+6*(n-1)].details+"</p><div class='pandg'><span class='price'>￥"+data[i+6*(n-1)].price+"/磅 </span> <span class='go'> <b>购买</b><i></i> </span> </div> </div> </li>")
                    }else if(i>=6){
                        return false;
                    }
                });
            })
        })
    }
    n+=1;
    //alert(n);
})
正确的代码
*/

    /*
        if($(window).scrollTop()>=$(document).height()-$(window).height()){
            $('#donghua').slideUp(800,function(){
                $.get('js/data.json',function(data){
                    $.each(data,function(i){
                        if(i<6){
                            //alert(i+6*(n-1));
                            $('#list ul').append("<li><div class='left'><img src="+data[i+6*(n-1)].src+"></div><div class='right'><h1>"+data[i+6*(n-1)].ti+"</h1><p>"+data[i+6*(n-1)].details+"</p><div class='pandg'><span class='price'>￥"+data[i+6*(n-1)].price+"/磅 </span> <span class='go'> <b>购买</b><i></i> </span> </div> </div> </li>")
                        }else if(i>=6){
                            return false;
                        }
                    });
                })
            })
        }

    n+=1;
    //console.log(n);
})*/


/*
var int=setInterval(function(){
    if($('#donghua').css('display')=='block'){
        $('#donghua').slideUp(500,function(){
            $.get('js/data.json',function(data){
                console.log(data.length);
                console.log(6*(n-1));
                if(data.length>=6*(n-1)){
                    alert('111');
                }else{
                    alert('000');
                }


                /*
                $.each(data,function(i){
                    if(i<6){
                        //alert(i+6*(n-1));
                        $('#list ul').append("<li><div class='left'><img src="+data[i+6*(n-1)].src+"></div><div class='right'><h1>"+data[i+6*(n-1)].ti+"</h1><p>"+data[i+6*(n-1)].details+"</p><div class='pandg'><span class='price'>￥"+data[i+6*(n-1)].price+"/磅 </span> <span class='go'> <b>购买</b><i></i> </span> </div> </div> </li>")
                    }else if(i>=6){
                        return false;
                    }
                });

            })
            n+=1;
        });
    }
},500);

*/

/*
$('#alt').click(function(){
    var a=document.documentElement.clientWidth
        b=document.documentElement.clientHeight
        c=window.screen.width
        d=window.screen.height;
        e= window.devicePixelRatio;
        alert(e);
})

*/