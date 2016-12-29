(function($) {
/*main-menu
===========================================*/
$('.js-dropdown-arrow').on('click', function(e) {
    e.preventDefault();
    var attribute = $(this).attr('href');
    $(attribute).slideToggle();

    var dataAttr = $(this).attr('data-target');
    $(dataAttr).slideToggle(500);
});

/* tabs 
=====================================*/
$(".js-tab-content:not(:first)").hide();
$('.js-tab').on('click', function(){
	$('.js-tab').parent().removeClass('active');
	$(this).parent().addClass('active');
	$('.js-tab-content').hide();

	var tabId = $(this).attr('href');
	$(tabId).fadeIn();
});

/*modal
===================================================*/
var modalWidth = $('.js-modal').innerWidth() / 2;
var modalHeight = $('.js-modal').innerHeight() / 2;
$('.js-modal').css({
	'margin-left': '-' + modalWidth + 'px',
	'margin-top': '-' + modalHeight + 'px'
});

$('.js-show-modal').on('click', function(e){
	e.preventDefault();
	$('.overlay').fadeIn(600);
	var dataId = $(this).attr('data-target');
	$(dataId).css('display', 'block').animate({opacity: 1, top: '40%'}, 800); 
});
$('.js-close-modal').on('click', function(e){
	e.preventDefault();
	$('.overlay').fadeOut(600);
	$('.js-modal').animate({opacity: 0, top: '-200px'}, 800);
});



})(jQuery)
