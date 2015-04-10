// JavaScript Document

$(function(){
	
	//搜索框交互
		$('.inp_sub').hover(function(){
			
			$(this).toggleClass('hover');
			})
	
	//导航最新资讯下拉菜单
		$('.nav_wrap ul li.news').hover(function(){
			
			$('.news_list').stop().slideDown('slow');
			
			},function(){
				
			$('.news_list').stop().slideUp('slow');
				
				})
	
	//登陆页面 登陆注册选项卡JS
	
		$('.nav_login ul li').click(function(){
			
			$(this).addClass('hover').siblings().removeClass('hover')
			$('.con_wrap > div').eq($(this).index()).show().siblings().hide();
			
			})
	
	
	//需求中心左侧点击切换
		$('.list_wrap ul').width(188*$('.list_wrap ul li').length)
		$('.btn_r').click(function(){
			
			$('.list_wrap ul').not(':animated').animate({'left':-188},500,function(){
				
				$('.list_wrap ul').children().first().appendTo($('.list_wrap ul'))
				
				$('.list_wrap ul').css('left',0)
				})
			
			})
		$('.btn_l').click(function(){
		  
		  
		  $('.list_wrap ul').children().last().prependTo($('.list_wrap ul'))
		  $('.list_wrap ul').css('left',-188);
		  $('.list_wrap ul').not(':animated').animate({'left':0},500);
		});
	
	//需求中心右侧点击广告
	
	//$('.pic_move ul li:odd').css('marginTop',5);//偶数图片距离上边5像素
	var long=($('.pic_move ul li').length/2)*5;
	
	$('.pic_move ul').height(68*$('.pic_move ul li').length+long)
	
	
	$('.btn_pr,.btn_nex').hover(function(){
		
		$(this).toggleClass('hover');
		})
		
	   
	   var length=$('.pic_move ul li').length;
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
	   $('.nav_pic ul ').append($btn)
	   
	   
	 
	 $('.btn_pr').click(function(){
	           index--;
			   if(index<0){
			       index = length-1;
			   }
			$('.pic_move ul').animate({'top':-index*73+'px'},300);
			$('.nav_pic ul li').eq(index).addClass('hover').siblings().removeClass('hover')
	})		  
	$('.btn_nex').click(function(){
	           index++;
			   if(index>length-1){
			       index = 0;
			   }
			$('.pic_move ul').animate({'top':-index*73+'px'},300);
			$('.nav_pic ul li').eq(index).addClass('hover').siblings().removeClass('hover')
	})	 
	$('.need_r').hover(function(){
		clearInterval(timer);
		
		},function(){
			
			 timer=setInterval(function(){
				index++;
				if(index >length -1){
				   index = 0;
		}
		$('.pic_move ul').animate({'top':-index*73+'px'},300);
		$('.nav_pic ul li').eq(index).addClass('hover').siblings().removeClass('hover')
		
	    },5000) 
			
			}).trigger('mouseleave');
			
		$('.nav_pic ul li').click(function(){
			 var  h = $(this).index();
			 $('.pic_move ul').animate({'top':-h*73+'px'},300,function(){
					index = h;
			 })
			 $('.nav_pic ul li').eq(h).addClass('hover').siblings().removeClass('hover')
		   })
	
	
	//广告信息位切换
	$('.news_move').width(1000*$('.news_move > div').length)
	
	$('.btn_pr_h,.btn_nex_h').hover(function(){
		
		$(this).toggleClass('hover');
		})
		
	   
	   var length_1=$('.news_move > div').length
	   var index_1=0;
	   var timers;
	   var $btn_h = ''
	   for(var i=0;i<length_1;i++){
		 
		  if(i ==0){
			 $btn_h +=  '<li class="hover"></li>';
		  }else{
			 $btn_h +=  '<li></li>';
		  }
	   }
	   $('.nav_pic_h ul ').append($btn_h)
	   
	   
	 
	 $('.btn_pr_h').click(function(){
	           index_1--;
			   if(index_1<0){
			       index_1 = length_1-1;
			   }
			$('.news_move').animate({'left':-index_1*1000+'px'},300);
			$('.nav_pic_h ul li').eq(index_1).addClass('hover').siblings().removeClass('hover')
	})		  
	$('.btn_nex_h').click(function(){
	           index_1++;
			   if(index_1>length_1-1){
			       index_1 = 0;
			   }
			$('.news_move').animate({'left':-index_1*1000+'px'},300);
			$('.nav_pic_h ul li').eq(index_1).addClass('hover').siblings().removeClass('hover')
	})	 
	
			
		$('.nav_pic_h ul li').click(function(){
			 var  g = $(this).index();
			 $('.news_move').animate({'left':-g*1000+'px'},300,function(){
					index_1 = g;
			 })
			 $('.nav_pic_h ul li').eq(g).addClass('hover').siblings().removeClass('hover')
		   })
	
	
	//商品信息选项卡
	
		$('.bus_nav ul li').click(function(){
			
			$(this).addClass('hover').siblings().removeClass('hover');
			$('.bus_list ol').eq($(this).index()).show().siblings().hide();
			
			})
	
	
	
	//首页登陆后的状态
	
		$('.head_wrap ol li.fir span').click(function(){
			$(this).addClass('hover');
			$('.cli_wrap').show();
			
			})
		$('.head_wrap ol li.fir').mouseleave(function(){
			$('.head_wrap ol li.fir span').removeClass('hover')
			$('.cli_wrap').hide();
			})
	
	
	
	//放大镜那页颜色选择
		$('.cli_more').click(function(){
			$('.color_win ul').not(':animated').animate({'top':-36},500,function(){
				$('.color_win ul').children().first().appendTo('.color_win ul');
				
				$('.color_win ul').css('top',0);
				})
			
			
			})
	
	//商品详情信息选项卡
	
		$('.nav_message ul li').click(function(){
			$(this).addClass('hover').siblings().removeClass('hover')
			$('.content_message>div').eq($(this).index()).show().siblings().hide();
			
			$('.nav_message ul li i').addClass('hover').siblings()
			})
			
			
			
	// 添加商品 里面的  选项卡
	   
	   $('.nav_d ul li').click(function(){
		   var index_d = $(this).index()
		   //alert(index_d)
		   $(this).addClass('hover').siblings().removeClass('hover')
		   $('.con_d1').eq(index_d).show().siblings().hide();
		   })
   //点击销货 退货  出现的
       $('.jiesuan_d dl dt b').click(function(){
		    $('.xiaoshi').show()
		   })
		   
    //弹出框
	  $('.tupian_d>b>input').click(function(){
		  $('.tanchu_d').show()
		  })
		  
    //添加店铺选项卡
	 $('.tianjia_1 ul li').click(function(){
		 var index_d1 = $(this).index();
		 $(this).addClass('hover').siblings().removeClass('hover');
		 $('.cen_2').eq(index_d1).show().siblings().hide();
		 })		
			
		/****************************************格子铺***********************************************************/
	//格子铺介绍左侧导航下g_relevant中li的点缀
		var g_len = $('.g_relevant ol li').length;
		//alert()
		 
		$('.g_relevant ol li:lt(3)').find('span').addClass('set');
		for(var i=0;i<g_len;i++){
		   //$('.g_relevant ol li').eq(i).find('span').innerText = 1+i;
		    //$('.g_relevant ol li').eq(i).find('span').text() = 1+i;
		   $('.g_relevant ol li').eq(i).find('span').text(1+i);
		}
		
	//给a标签清除右边距
	    var g_len2 = $('.g_pictures a').length;
		var g_len3 = $('.g_pictures2 a').length;
		var g_len4 = $('.g_pictures3 a').length;
		var g_a1 = $('.g_pictures a');
	    for(var i=0;i<g_len2;i++){
		    if((i+1)%4 == 0){
			    g_a1[i].className = 'last_time'
			}
		}
        for(var j=0;j<g_len3;j++){
		    if((j+1)%4 == 0){
			    $('.g_pictures2 a')[j].className = 'last_time';
			    //$('.g_pictures2 a')[j].style.marginRight = 0;
				//$('.g_pictures2 a')[j].css('margin-top',0)
			}
		}
		for(var z=0;z<g_len4;z++){
		    if((z+1)%4 == 0){
			    $('.g_pictures3 a')[z].className = 'last_time';
			}
		}
		$('.g_text1').click(function(){
		    $('.g_region').show();
			return false;
		})  
		$('.g_region a').click(function(){
		    $('.g_text1').val($(this).text())
		})
		$('body').click(function(){
		    $('.g_region').hide();
			
		})
    /****************************************产品大全***********************************************************/
		$('.g_search2 ul li').mouseover(function(){
			$(this).addClass('hover');
			$(this).find('p').show();
			$(this).find('.g_region').show();
		})
		$('.g_search2 ul li').mouseout(function(){
			$(this).removeClass('hover');
			$(this).find('p').hide();
			$(this).find('.g_region').hide();
		})
		$('.g_region').click(function(){
			return false;
		});
        //地区
		$('.g_region div:gt(1)').css('border','none');
		$('.g_region a').click(function(){
		    $('.g_bux b').text($(this).text())
		})
		$('.g_input3').click(function(){
		    var nul = $('.g_input2').val() =='';
		    if(!nul){
		        $('.g_bux b').text($('.g_input2').val())
			}
			$('.g_input2').val('');
		})
	/****************************************产品大全2***********************************************************/
	//广告信息位切换2
	$('.g_bottom ol').width(775*$('.g_bottom ol li').length);
	
	$('.g_l,.g_r').hover(function(){
		
		$(this).toggleClass('hover');
		})
		
	   
	   var length_2=$('.g_bottom ol li').length
	   var index_2=0;
	   var $btn_h2 = ''
	   for(var i=0;i<length_2;i++){
		 
		  if(i ==0){
			 $btn_h2 +=  '<li class="hover"></li>';
		  }else{
			 $btn_h2 +=  '<li></li>';
		  }
	   }
	   $('.g_nav ul').append($btn_h2)
	   
	   
	 
	 $('.g_l').click(function(){
	           index_2--;
			   if(index_2<0){
			       index_2 = length_2-1;
			   }
			$('.g_bottom ol').animate({'left':-index_2*775+'px'},300);
			$('.g_dot ul li').eq(index_2).addClass('hover').siblings().removeClass('hover');
	})		  
		$('.g_r').click(function(){
				   index_2++;
				   if(index_2>length_2-1){
					   index_2 = 0;
				   }
				$('.g_bottom ol').animate({'left':-index_2*775+'px'},300);
				$('.g_dot ul li').eq(index_2).addClass('hover').siblings().removeClass('hover');
		})
			
		$('.g_dot ul li').click(function(){
				 var  z = $(this).index();
				$('.g_dot ul li').eq(z).addClass('hover').siblings().removeClass('hover');
				$('.g_bottom ol').animate({'left':-z*775+'px'},300,function(){
						index_2 = z;
				});
		})	
			
			
	
	})