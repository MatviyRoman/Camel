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

// $('.right>.contentSlider, .left>.contentSlider').carousel({
//   interval: 1000,
//   pause: 'hover',
//   wrap: true
// })

$(window).on('load', function(){
	$('.right .contentSlider .prev').click(function(){
		$('.contentSlider').carousel('prev')
	})
	$('.right .contentSlider .next').click(function(){
		$('.contentSlider').carousel('next')
	})
})

// sliderCarousel Start
$(window).on('load', function(){
	$('.sliderCarousel').carousel({
		interval: 20000,
		pause: 'hover',
		wrap: true
	})
	$('.sliderCarousel .prev').click(function(){
		$('.sliderCarousel').carousel('prev')
	})
	$('.sliderCarousel .next').click(function(){
		$('.sliderCarousel').carousel('next')
	})
	$('.sliderCarousel .prev, .sliderCarousel .next').click(function(event) {
		event.preventDefault();
	});
})
// sliderCarousel End


// carouselSlider Start
$(window).on('load', function(){
	$('.carouselSlider').carousel({
	  	interval: 1000,
	  	pause: 'hover',
	  	wrap: true
	})
	$('.carouselSlider .prev').click(function(){
		$('.carouselSlider').carousel('prev')
	})
	$('.carouselSlider .next').click(function(){
		$('.carouselSlider').carousel('next')
	})
	$('.carouselSlider .prev, .carouselSlider .next').click(function(event) {
		event.preventDefault();
	});
})
// carouselSlider End


// left contentSlider Start
$(window).on('load', function(){
	$('.left .contentSlider').carousel({
	  	interval: 3000,
	  	pause: 'hover',
	  	wrap: true
	})
	$('.left .contentSlider .prev').click(function(){
		$('.left .contentSlider').carousel('prev')
	})
	$('.left .contentSlider .next').click(function(){
		$('.left .contentSlider').carousel('next')
	})
	$('.left .contentSlider .prev, .left .contentSlider .next').click(function(event) {
		event.preventDefault();
	});
	$('.left .contentSlider img').click(function(){
   		$('.left .contentSlider img').removeClass("active");
    	$(this).addClass("active");
	});
	var nextSlide = function myStart() { setTimeout( function(){
        $('.left .contentSlider .prev').removeClass("active");
    	$('.left .contentSlider .next').addClass("active");
    	$('.left .contentSlider').carousel('next')
    },0);}
    setInterval(nextSlide,3000);
    var prevSlide = function myStart() { setTimeout( function(){
        $('.left .contentSlider .next').removeClass("active");
    	$('.left .contentSlider .prev').addClass("active");
    	$('.left .contentSlider').carousel('prev')
    },0);}
    setInterval(prevSlide,6000);
})
// left contentSlider End


// right contentSlider Start
$(window).on('load', function(){
	$('.right .contentSlider').carousel({
	  	interval: 3000,
	  	pause: 'hover',
	  	wrap: true
	})
	$('.right .contentSlider .prev1').click(function(){
		$('.right .contentSlider').carousel('prev')
	})
	$('.right .contentSlider .next1').click(function(){
		$('.right .contentSlider').carousel('next')
	})
	$('.right .contentSlider .prev1, .right .contentSlider .next1').click(function(event) {
		event.preventDefault();
	});
	$('.right .contentSlider img').click(function(){
   		$('.right .contentSlider img').removeClass("active");
    	$(this).addClass("active");
	});
	var nextSlide = function myStart() { setTimeout( function(){
        $('.right .contentSlider .prev1').removeClass("active");
    	$('.right .contentSlider .next1').addClass("active");
    	$('.right .contentSlider').carousel('next')
    },0);}
    setInterval(nextSlide,3000);
    var prevSlide = function myStart() { setTimeout( function(){
        $('.right .contentSlider .next1').removeClass("active");
    	$('.right .contentSlider .prev1').addClass("active");
    	$('.right .contentSlider').carousel('prev')
    },0);}
    setInterval(prevSlide,6000);
})
// right contentSlider End