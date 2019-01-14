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
})

$(window).on('load', function(){
	$('.right .contentSlider .next').click(function(){
		$('.contentSlider').carousel('next')
	})
})

$('.carousel1').carousel({
  interval: 2000,
  pause: 'hover',
  wrap: true
})

$(window).on('load', function(){
	$('.carousel1 .prev').click(function(){
		$('.carousel1').carousel('prev')
	})
})

$(window).on('load', function(){
	$('.carousel1 .next').click(function(){
		$('.carousel1').carousel('next')
	})
})

$('.carousel1 .prev, .carousel1 .next').click(function(event) {
	event.preventDefault();
});

$('.carouselSlider').carousel({
  interval: 1000,
  pause: 'hover',
  wrap: true
})

$(window).on('load', function(){
	$('.carouselSlider .prev').click(function(){
		$('.carouselSlider').carousel('prev')
	})
})

$(window).on('load', function(){
	$('.carouselSlider .next').click(function(){
		$('.carouselSlider').carousel('next')
	})
})

$('.carouselSlider .prev, .carouselSlider .next').click(function(event) {
	event.preventDefault();
});

$('.content>.prev, .content>.next').click(function(event) {
	event.preventDefault();
});

// $('.next').click(function(event) {
// 	event.preventDefault();
// });

// $('.mySlide').carousel({
//   interval: 2000,
//   pause: 'hover',
//   wrap: true
// })


// $('.mySlide').carousel()
// $('.mySlide').carousel('next')
// $('.mySlide').carousel('prev')

// $('.mySlide').on('slide.bs.carousel', function () {
//   // do something…
// })