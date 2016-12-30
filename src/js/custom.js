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
        $('.overlay').fadeIn(600);
        var dataId = $(this).attr('data-target');
        $(dataId).css('display', 'block').animate({ opacity: 1, top: '50%' }, 800);
    });
    $('.js-close-modal').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeOut(600);
        $('.js-modal').animate({ opacity: 0, top: '-200px' }, 800);
    });



})(jQuery)
