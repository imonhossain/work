$(document).ready(function(){
	//active nave menu
			$(".navbar-nav li a").click(function(){
				  $(".navbar-nav li a").removeClass("active");
				  $(this).addClass("active");
				 
			   }); 
			   
			   //active portfolio menu
			$(".portfolio_filter ul li a:hover").click(function(){
				  $(".navbar-nav li a").removeClass("active");
				  $(this).addClass("active");
				 
			   });  
			   
			   $(".nav-active").css({"color":"#fff", "background":"#212121"});
	 $(".portfolio_contents ul li ").eq(3).css({"margin-left":"338px"});
	 $(".portfolio_contents ul li ").eq(8).css({"margin-left":"338px"});
	$(".single-icon").eq(0).mouseenter(function(){
		$(".single-icon .single1").eq(0).fadeIn(500);
		$(".single-icon .absolute1 i").eq(0).fadeIn(500);
		$(".single-icon").eq(0).css("border-color", "#1ab4ef");
	});
	$(".single-icon").eq(0).mouseleave(function(){
		$(".single-icon .single1").fadeOut(500);
		$(".single-icon .absolute1 i").eq(0).fadeOut(500);
		$(".single-icon").eq(0).css("border-color", "#fff");
	});
	
	$(".single-icon").eq(1).mouseenter(function(){
		$(".single-icon .single1").eq(1).fadeIn(500);
		$(".single-icon .absolute1 i").eq(1).fadeIn(500);
		$(".single-icon").eq(1).css("border-color", "#1ab4ef");
		//$(".single-icon .absolute i").eq(1).hide();
		//$(".single-icon .absolute1 i").eq(1).show();
	});
	$(".single-icon").eq(1).mouseleave(function(){
		$(".single-icon .single1").fadeOut(500);
		$(".single-icon .absolute1 i").eq(1).fadeOut(500);
		$(".single-icon").eq(1).css("border-color", "#fff");
	});
	
	$(".single-icon").eq(2).mouseenter(function(){
		$(".single-icon .single1").eq(2).fadeIn(500);
		$(".single-icon .absolute1 i").eq(2).fadeIn(500);
		$(".single-icon").eq(2).css("border-color", "#1ab4ef");
	});
	$(".single-icon").eq(2).mouseleave(function(){
		$(".single-icon .single1").fadeOut(500);
		$(".single-icon .absolute1 i").eq(2).fadeOut(500);
		$(".single-icon").eq(2).css("border-color", "#fff");
	});
	
	$(".single-icon").eq(3).mouseenter(function(){
		$(".single-icon .single1").eq(3).fadeIn(500);
		$(".single-icon .absolute1 i").eq(3).fadeIn(500);
		$(".single-icon").eq(3).css("border-color", "#1ab4ef");
	});
	$(".single-icon").eq(3).mouseleave(function(){
		$(".single-icon .single1").fadeOut(500);
		$(".single-icon .absolute1 i").eq(3).fadeOut(500);
		$(".single-icon").eq(3).css("border-color", "#fff");
	});
	
	$(".single-icon").eq(4).mouseenter(function(){
		$(".single-icon .single1").eq(4).fadeIn(500);
		$(".single-icon .absolute1 i").eq(4).fadeIn(500);
		$(".single-icon").eq(4).css("border-color", "#1ab4ef");
	});
	$(".single-icon").eq(4).mouseleave(function(){
		$(".single-icon .single1").fadeOut(500);
		$(".single-icon .absolute1 i").eq(4).fadeOut(500);
		$(".single-icon").eq(4).css("border-color", "#fff");
	});
	
	$(".single-icon").eq(5).mouseenter(function(){
		$(".single-icon .single1").eq(5).fadeIn(500);
		$(".single-icon .absolute1 i").eq(5).fadeIn(500);
		$(".single-icon").eq(5).css("border-color", "#1ab4ef");
	});
	$(".single-icon").eq(5).mouseleave(function(){
		$(".single-icon .single1").fadeOut(500);
		$(".single-icon .absolute1 i").eq(5).fadeOut(500);
		$(".single-icon").eq(5).css("border-color", "#fff");
	});
	
	$(".single_portfolios .overly").css({"opacity":"0.0"});
	$(".single_portfolios").hover(function(){
		$(this).find(".overly").stop().animate({"opacity":"0.8"});
	},
	function(){
		$(this).find(".overly").stop().animate({"opacity":"0.0"});
	}
	) ;
	
	$(".member-icon .hover").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".mb-sol-icon").stop().css({"background":"#cd2929"});
},
	function(){
		$(this).find(".mb-sol-icon").stop().css({"background":"#1c1b1b"});
	}
	);
	
	
	$(".member-icon").css({"opacity":"0.0"});
	$(".member-image.rotate45").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".member-icon").stop().animate({"opacity":"1"});
},
	function(){
		$(this).find(".member-icon").stop().animate({"opacity":"0.0"});
	}
	);
	
	
	$(".icon-center2 .single-icon").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".single-fa-icon").stop().animate(1000).css({"color":"#1ab4ef"});
		$(this).stop().css({"border-color":"#1ab4ef"})
},
	function(){
		$(this).find(".single-fa-icon").stop().css({"color":"#fff"});
		$(this).stop().css({"border-color":"#fff"})
	}
	);
	
	 /* $(".portfolio_filter ul li").click(function(){
		$(this).css({"background":"#212121", "color":"#fff"});
	
});  */

			$('.bxslider').bxSlider({
                 mode: 'horizontal',
                 slideMargin: 5,
                 auto:true
             });  
			 
			 
			   
}); 

  

/* $(document).ready(function(){
	$(".single-icon").eq(0).hover(function(){
		$(".single-icon .absolute i.icon-facebook").css({"color":"#1ab4ef","background":"blue",});
	});
	$(".single-icon").eq(1).hover(function(){
		$(".single-icon .absolute i.icon-twitter").css("color" , "blue");
	});
	$(".single-icon").mouseleave(function(){
		$(".single-icon .absolute i").css("color" , "white");
	});
})  */