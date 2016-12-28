(function($){
	/*main-menu
	===========================================*/
	$('.js-dropdown-arrow').on('click', function(e){
		e.preventDefault();
		var attribute = $(this).attr('href');
		$(attribute).slideToggle();

		var dataAttr = $(this).attr('data-target');
		$(dataAttr).slideToggle(500);
	});

})(jQuery)