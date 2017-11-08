(function($){
  $(window).on("load",function(){

    // Popup
    function bodyScroll(bool) {
      if (bool === true) {
        $('body').removeClass('mod-disable-scroll')
      } else if (bool === false) {
        $('body').addClass('mod-disable-scroll');
      } else {
        return
      }
    }

    $('[data-open-gallery]').on('click', function(e){
      e.preventDefault();

      let gallerySrc = $(this).children('.oi-thumb--slider-src').children().clone()

      $('[data-gallery] .oi-slider').append(gallerySrc);

      $(".oi-slider").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        advanced: { 
          autoExpandHorizontalScroll: true
        }
      });

      bodyScroll(false);
      $('[data-gallery]').addClass('mod-open');
    });

    // $('[data-open-popup]').on('click', function(e){
    //   e.preventDefault();

    //   bodyScroll(false);
    //   $('[data-gallery]').addClass('mod-open');
    // });

    $('[data-close-popup]').on('click', function(e){
      e.preventDefault();

      $("[data-open-gallery] .oi-slider").mCustomScrollbar("destroy");
      $('[data-gallery] .oi-slider').html('')

      bodyScroll(true);
      $($(this).parents('.oi-popup')).removeClass('mod-open');
    });
    // end Popup
  });
})(jQuery);