// JavaScript Document

$(function(){
	
	
	
	//需求中心右侧点击广告
	
	//$('.pic_move ul li:odd').css('marginTop',5);//偶数图片距离上边5像素
	var long=($('.zxzx2_move ul li').length/2)*5;
	
	$('.zxzx2_move ul').width(205*$('.zxzx2_move ul li').length+long)
	
	
	$('.zxzx2_ipr,.zxzx2_inex').hover(function(){
		
		$(this).toggleClass('hover');
		})
		
	   
	   var length=$('.zxzx2_move ul li').length;
	   var index=0;
	   var timer;
	   var $btn = ''
	   for(var i=0;i<length;i++){
		 
		  if(i ==0){
			 $btn +=  '<li class="hover"></li>';
		  }else{
			 $btn +=  '<li></li>';
		  }
	   }
	   $('.zxzx2_ipic ul ').append($btn)
	   
	   
	 
	 $('.zxzx2_ipr').click(function(){
	           index--;
			   if(index<0){
			       index = length-1;
			   }
			$('.zxzx2_move ul').animate({'left':-index*205+'px'},300);
			$('.zxzx2_ipic ul li').eq(index).addClass('hover').siblings().removeClass('hover')
	})		  
	$('.zxzx2_inex').click(function(){
	           index++;
			   if(index>length-1){
			       index = 0;
			   }
			$('.zxzx2_move ul').animate({'left':-index*205+'px'},300);
			$('.zxzx2_ipic ul li').eq(index).addClass('hover').siblings().removeClass('hover')
	})	 
	$('.zxzx2_in').hover(function(){
		clearInterval(timer);
		
		},function(){
			
			 timer=setInterval(function(){
				index++;
				if(index >length -1){
				   index = 0;
		}
		$('.zxzx2_move ul').animate({'left':-index*205+'px'},300);
		$('.zxzx2_ipic ul li').eq(index).addClass('hover').siblings().removeClass('hover')
		
	    },5000) 
			
			}).trigger('mouseleave');
			
		$('.zxzx2_ipic ul li').click(function(){
			 var  h = $(this).index();
			 $('.zxzx2_move ul').animate({'left':-h*205+'px'},300,function(){
					index = h;
			 })
			 $('.zxzx2_ipic ul li').eq(h).addClass('hover').siblings().removeClass('hover')
		   })
	
	
	
	
	
	
	})