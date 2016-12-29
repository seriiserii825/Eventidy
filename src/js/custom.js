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


})(jQuery)
