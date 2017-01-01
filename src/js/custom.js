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
    $("#tabs .js-tab-content").not(':first').hide();
    $('#tabs .js-tab').on('click', function(e) {
        e.preventDefault();

        $('#tabs .js-tab').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('#tabs .js-tab-content').hide();
        var tabId = $(this).attr('href');
        $(tabId).fadeIn();
    });

    /* events tabs
    ================================*/
    $("#events-tabs .js-tab-content").not(':first').hide();
    $('#events-tabs .js-tab').on('click', function(e) {
        e.preventDefault();

        $('#events-tabs .js-tab').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('#events-tabs .js-tab-content').hide();
        var tabId = $(this).attr('href');
        $(tabId).fadeIn();
    });

    /* events slider
    ============================================*/
    $('#events-gallery').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 2000,
        dots: true,
        mobileFirst: true,
        pauseOnHover: false,
        arrows: false
    });

    /* collapse 
    =========================================*/
    $('.js-collapse-content').not(':first').hide();
    $('.js-collapse-tab').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var dataCollapse = $this.attr('data-collapse');
        $(dataCollapse).slideToggle();

        if ($this.hasClass('collapse-open')) {
            $this.removeClass('collapse-open');
            $this.children('i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
        } else {
            $this.addClass('collapse-open');
            $this.children('i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
            return false;
        }
    });

    /* validate
    ================================================*/
    $('#myForm').validate({
        rules: {
            name: {
                required: true
            },
            mail: {
            	required: true,
            	email: true
            }
        },
        messages: {
        	name: {
        		required: "Поле обязательно"
        	},
        	mail: {
        		required: "Поле обязательно",
        		email: "Введите валидный е-майл"
        	}
        }
    });

    $('.form-control').on('focus blur select change keydown submit', function(){
    	var times = $(this).attr('data-times');
    	var check = $(this).attr('data-check');
		if($(this).hasClass('error')){
			$(check).hide();
			$(times).show();
		}else if($(this).hasClass('valid')){
			$(times).hide();
			$(check).show();
		}
	});

    $('#js-form-button').on('mousedown mouseup', function(){
    	if($('.form-control').hasClass('error')){
    		$('.fa-times-circle').show();
    	}
    });

    /* selectify
    ==========================================*/
    $("#js-form-select").select2();


    /*modal
    ===================================================*/
    var modalWidth = $('.js-modal').innerWidth() / 2;
    var modalHeight = $('.js-modal').innerHeight() / 2;
    $('.js-modal').css({
        'margin-left': '-' + modalWidth + 'px',
        'margin-top': '-' + modalHeight + 'px'

    });


    $('.js-show-modal').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeIn(610);
        var dataId = $(this).attr('data-target');
        $(dataId).css('display', 'block').animate({ opacity: 1, top: '50%' }, 800);
    });
    $('.js-close-modal').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeOut(600);
        $('.js-modal').animate({ opacity: 0, top: '-200px' }, 800);
    });



})(jQuery);
