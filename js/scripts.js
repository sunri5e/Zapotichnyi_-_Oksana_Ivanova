(function($){
  $(document).ready(function() {

    // Popup
    function bodyScroll(bool) {
      if (bool === true) {
        $('body').removeClass('mod-disable-scroll')
        $('.oi-popup').scrollTop(0)
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
      if ($(window).width() > 1024) {
        $(".oi-slider").mCustomScrollbar({
          axis: "x",
          theme: "dark-3",
          advanced: { 
            autoExpandHorizontalScroll: true
          }
        });
      }
      $('[data-gallery]').addClass('mod-open');

      bodyScroll(false);
    });

    $('[data-open-popup]').on('click', function(e){
      e.preventDefault();

      bodyScroll(false);
      $($(this).data('open-popup')).addClass('mod-open');
    });

    $('[data-close-popup]').on('click', function(e){
      e.preventDefault();

      $("[data-open-gallery] .oi-slider").mCustomScrollbar("destroy");
      $('[data-gallery] .oi-slider').html('')

      bodyScroll(true);
      $($(this).parents('.oi-popup')).removeClass('mod-open');
    });
    // end Popup


    // Form submit
    $('#footerContacts').submit(function(e) {
      var name = document.getElementById('footerFormName'),
          phone = document.getElementById('footerFormPhone'),
          message = document.getElementById('footerFormMessage');

      if (!name.value || !phone.value || !message.value) {
        console.log('Please check your entries');
        return false;
      } else {
        e.preventDefault();
        $.ajax({
          url: "https://formspree.io/sunrise944@gmail.com", 
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        $(this).get(0).reset();
        $('#formSuccess').addClass('mod-open');
        return console.log('Message sent');
      }
    });


    $('#consultContacts').submit(function(e) {
      var name = document.getElementById('consultFormName'),
          phone = document.getElementById('consultFormPhone'),
          email = document.getElementById('consultFormMail'),
          message = document.getElementById('consultFormMessage');

      if (!name.value || !phone.value || !email.value || !message.value) {
        console.log('Please check your entries');
        return false;
      } else {
        e.preventDefault();
        $.ajax({
          url: "https://formspree.io/sunrise944@gmail.com", 
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        $(this).get(0).reset();
        $('#formSuccess').addClass('mod-open');
        $($(this).parents('.oi-popup')).removeClass('mod-open');
        return console.log('Message sent');
      }
    });
    // end Form submit

    $('.oi-form-control').keyup(function() {
      if ($(this).val()) {
        $(this).addClass('mod-filled')
      } else {
        $(this).removeClass('mod-filled')
      }
    });
  });
})(jQuery);