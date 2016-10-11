;
/***********PC首页****************/ 
	function playVideo(){
    		setTimeout(function(){
    			$('.qr-code-container').show();
    			$('.vadio-container').show();
    			$('.qr-code img').hide();
    			$('.vadio-container').animate({height:"540px",width:"960px"},800);
    			$('.vadio-btn').show();
    			setTimeout(function(){
    				$('.shade').show();
    			},500);
    		
    		},2000);
	}
	/*PCµã»÷²¥·ÅÔÝÍ£*/
	function controlVideo(){
            var myVideo = document.getElementById('myvideo');
            $('.vadio-btn').click(function () { 
                if (myVideo.paused){
                   $('.shade').css("opacity",0);
                   $('.vadio-btn').hide();
                    myVideo.play();
                }
            });
            $('.shade').click(function (){
                myVideo.pause();$('.vadio-btn').show();
                $('.shade').css("opacity",0.5);
            });
    }
    /*ÊÓÆµÃÉ°æ*/
    function viedoCover(){    
            $('.shade').click(function (){
                myVideo.pause();
                $('.vadio-btn').show();
                $('.shade').css("opacity",0.5);
            }); 
    }
/***********PC关于我们****************/ 
function showSections(){
  //点击出现不同的区域
    $('.section-nav').click(function(){
       //清楚之前所有的样式
       $('.section-nav').next('.icons').removeClass('hover');
       $('.section').hide();
       //处理当前的点击状态
       $(this).next('.icons').addClass('hover');
       var id = $(this).data('section');  //$(this).attr('data-section');
       $('#'+id).show();
    });
}
/***********PC常见问题****************/ 
/*点击出现/消失文本*/
 function showText(){
    $('.problem').click(function(){ 
        var $p = $(this).find('.hide-text');
        if(!$p.hasClass('show')){
            $(this).find('.hide-text').addClass('show');
            $(this).find('.down-btn img').attr('src','images/btn_down.png'); 
        }else{
            $(this).find('.down-btn img').attr('src','images/btn.png');
            $(this).find('.hide-text').removeClass('show');
        }
   });
}
