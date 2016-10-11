;
/**************H5首页*****************/
    /*H5ÊÓÆµ**/
    var h5myVideo = document.getElementById('h5myvideo');
    eventVideo = function (e,fun){  
        h5myVideo.addEventListener(e,function(){  
              fun(e);
            //f.call(this,e);
        });  
    } 
    function h5controlVideo(){
            $('.h5vadio-btn').on('click',function () { 
                if (h5myVideo.paused){
                    $('.h5vadio-container video').css('display','block');
                    $('.h5vadio-btn').hide();
                    h5myVideo.play();
                }
                $('.h5shade').on('click',function (){
                    h5myVideo.pause();
                });
            });
        
    }
	
    /*展示导航条*/
    function showNav(){
        
            var $nav=$('.phone_menu_inner_over');
            $('.btn_show_menu').click(function(){ 
    	        if(!$nav.hasClass('active')){
    	            $nav.addClass('active');
    	        }else{
    	            $nav.removeClass('active');
    	        }   
          	});
       
    } 
    /*隐藏导航条*/
    function hideNav(){
          	$(document).scroll(function(){
            	if($nav.hasClass('active')){
                	$nav.removeClass('active');
            	}
          	});
    }  
/**************H5关于我们**********/
/*导航函数首页函数有直接调用*/
/**************H5常见问题**********/
/*导航函数首页函数有直接调用*/
/*点击出现/消失文本*/
 function showText(){
    $('.problem').click(function(){ 
        var $p = $(this).find('.hide-text');
        if(!$p.hasClass('show')){
            $(this).find('.hide-text').addClass('show');
            // $(this).find('.down-btn img').attr('src','images/btn_down.png'); 
        }else{
            // $(this).find('.down-btn img').attr('src','images/btn.png');
            $(this).find('.hide-text').removeClass('show');
        }
   });
}
