$(document).ready(function(){ 

    function onScrollInit( items, trigger ) {
        items.each( function() {
          var osElement = $(this),
              osAnimationClass = osElement.attr('data-os-animation'),
              osAnimationDelay = osElement.attr('data-os-animation-delay');
       
          osElement.css({
              '-webkit-animation-delay':  osAnimationDelay,
              '-moz-animation-delay':     osAnimationDelay,
              'animation-delay':          osAnimationDelay
          });
       
          var osTrigger = ( trigger ) ? trigger : osElement;
       
          osTrigger.waypoint(function() {
              osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '80%'
          });
        });
      }

    $('.content-nav').fadeOut();
    $(window).load(function(){
        $('#masterLoaderIcon').removeClass('hidden');
        setTimeout(function() {
            $(document).scrollTop(0);
            $('#masterLoader').fadeOut();
            // $('body').css('overflow-y','scroll');
            // onScrollInit( $('.below') );
        }, 1000);
    });

    $(document.body).on('click', '#bannerArrow', function () {
        $('.banner-content').fadeOut();
        setTimeout(function() {
            $('.main-content').animate({'top':'0'},800);
            setTimeout(function() {
                $('.content-nav').fadeIn();
                onScrollInit( $('.below') );
                $('body').css('overflow-y', 'scroll');
            }, 800);
        }, 500);
    });

    $(document.body).on('click', '#mobileArrow', function () {
        $('.banner-content').fadeOut();
        setTimeout(function() {
            $('.main-content').animate({'top':'0'},800);
            setTimeout(function() {
                $('.content-nav').fadeIn();
                onScrollInit( $('.below') );
                $('body').css('overflow-y', 'scroll');
            }, 800);
        }, 500);
    });

    $(document.body).on('click', '#contentLogoContainer', function () {
        $(document).scrollTop(0);
        $('.content-nav').fadeOut();
        $('.main-content').animate({'top':'100vh'},800);
        $('body').css('overflow-y', 'hidden');
        setTimeout(function() {
            onScrollInit( $('.below') );
            $('.banner-content').fadeIn();
        }, 800);
    });

    $(document.body).on('shown.bs.modal', '.modal', function () {
        $(this).find('.auto-focus').focus();
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top - 150;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };


    $(window).on('scroll', function(){
        if ($('.about-page').isInViewport()) {
            $('.content-nav-opt').removeClass('active');
            $('#aboutNav').addClass('active');
        }

        else if ($('.services-page').isInViewport()) {
            $('.content-nav-opt').removeClass('active');
            $('#servicesNav').addClass('active');
        }

        else if ($('.get-started-page').isInViewport()) {
            $('.content-nav-opt').removeClass('active');
            $('#getStartedNav').addClass('active');
        }

        else if ($('.contact-page').isInViewport()) {
            $('.content-nav-opt').removeClass('active');
            $('#contactNav').addClass('active');
        }
    });

})