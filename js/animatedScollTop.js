(function( $ ){
  $.fn.animatedScrollTop = function(options) {
    
    options = $.extend($.fn.animatedScrollTop.defaults, options);
    
    // var scrollPosition = 0;
    // var insertion = '<a id="scrollTop" href="#" style="display: none; position: fixed; width: 30px; height: 30px; bottom: 40px; right: 40px;"></a>';
    // var fadingSpeed = 500;
    // var animationSpeed = 1000;
    
    this.scroll(function() {
      scrollPosition = $(this).scrollTop();
      // $('#jquery-test').html(options.scrollPosition).css('position','fixed');
      updateScrollTopLink();
    });
    
    var insertScrollTopLink = function() {
      $('body').prepend(options.insertion);
    };
    
    insertScrollTopLink();
        
    var updateScrollTopLink = function() {
      if(scrollPosition >= 400) {
        $('#scrollTop').fadeIn(options.fadingSpeed); 
      } else {
        $('#scrollTop').fadeOut(options.fadingSpeed);
      }
    };
    
    $('#scrollTop').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, options.animationSpeed );
      });
    };
    
    $.fn.animatedScrollTop.defaults = {
      scrollPosition : 0,
      insertion : '<a id="scrollTop" href="#" style="display: none; position: fixed; width: 30px; height: 30px; bottom: 40px; right: 40px;"></a>',
      fadingSpeed : 500,
      animationSpeed : 1000
    };  
    
})( jQuery );
