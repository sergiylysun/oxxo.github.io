$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.more-btn').click(function(){
		$(this).find('.more-img').toggleClass('flip');
		$(this).next().find('.materials:first').slideToggle(); 
		return false;
	});

	// $('.more-btn').click(function(){
	// 	// $(this).nextAll().find('.more-img').toggleClass('flip'); 
	// 	$(document).find('.new').css('background', 'red');
	// 	return false;
	// });

	$('select').on('change', function(event) {
		event.preventDefault();
		// $(document).find('.new').css('background', 'red');
		$(this).nextAll().find('.more-img').toggleClass('flip');
		/* Act on the event */
	});
	
	/* components */
	
	
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	// if($('.fancybox').length) {
	// 	$('.fancybox').fancybox({
	// 		margin  : 10,
	// 		padding  : 10
	// 	});
	// };
	if($('.slider-slick').length) {
		$('.slider-slick').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};

	if($('.about-slider').length) {
		$('.about-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"y",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandVerticalScroll:true}
		});
	};
	
	
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


$(function() {
	$('div.star').raty();
});

$(function() {
	$('.work-box-item').hover(function() {
		$(this).find('.work-box-item-desc').slideToggle('normal');
	});
});
