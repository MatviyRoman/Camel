$(document).ready(function(){
	$('#navbar2 a').click(function(){
   		$('#navbar2 a').removeClass("active");
    	$(this).addClass("active");
	});
});

$(window).on('load', function(){
	$('.btnShop').click(function(){
		$('.modalHeaderWindow').toggle();
	})
})

$(window).on('load', function(){
	$('.error').click(function(){
		$('.modalProductsWindow').toggle();
	})
})

$(window).on('load', function(){
	$('.readMore').click(function(){
		$('#readMore').toggle();
		$('#noReadMore').toggle();
	})
})