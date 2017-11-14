(function($){
  $(window).on("load", function() {

    // Popup
    function bodyScroll(bool) {
      if (bool === true) {
        $('html').removeClass('mod-disable-scroll')
        $('.oi-popup').scrollTop(0)
      } else if (bool === false) {
        $('html').addClass('mod-disable-scroll');
      } else {
        return
      }
    }

    $('[data-open-popup]').on('click', function(e){
      e.preventDefault();

      bodyScroll(false);
      $($(this).data('open-popup')).addClass('mod-open');
    });

    $('[data-close-popup]').on('click', function(e){
      e.preventDefault();

      bodyScroll(true);
      $($(this).parents('.oi-popup')).removeClass('mod-open');
    });
    // end Popup


    // Form submit
    function showSuccess(elem) {
      $(elem).addClass('mod-open')

      setTimeout(function(){
        $(elem).removeClass('mod-open')
      }, 3000)
    }

    $('#footerContacts').submit(function(e) {
      var name = document.getElementById('footerFormName'),
          phone = document.getElementById('footerFormPhone'),
          message = document.getElementById('footerFormMessage');

      if (!name.value || !phone.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        $.ajax({
          url: "https://formspree.io/office@oksanaivanova.com", 
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        $(this).get(0).reset();
        showSuccess('.oi-section--success');
        return
      }
    });


    $('#consultContacts').submit(function(e) {
      var name = document.getElementById('consultFormName'),
          phone = document.getElementById('consultFormPhone'),
          email = document.getElementById('consultFormMail'),
          message = document.getElementById('consultFormMessage');

      if (!name.value || !phone.value || !email.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        $.ajax({
          url: "https://formspree.io/office@oksanaivanova.com", 
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        $(this).get(0).reset();
        showSuccess('#formSuccess');
        $($(this).parents('.oi-popup')).removeClass('mod-open');
        return;
      }
    });


    $('#orderDesignContacts').submit(function(e) {
      var name = document.getElementById('orderDesignFormName'),
          phone = document.getElementById('orderDesignFormPhone'),
          email = document.getElementById('orderDesignFormMail'),
          message = document.getElementById('orderDesignFormMessage');

      if (!name.value || !phone.value || !email.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        $.ajax({
          url: "https://formspree.io/office@oksanaivanova.com", 
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        $(this).get(0).reset();
        showSuccess('#formSuccess');
        $($(this).parents('.oi-popup')).removeClass('mod-open');
        return;
      }
    });


    $('#orderServiceContacts').submit(function(e) {
      var name = document.getElementById('orderServiceFormName'),
          phone = document.getElementById('orderServiceFormPhone'),
          email = document.getElementById('orderServiceFormMail'),
          message = document.getElementById('orderServiceFormMessage');

      if (!name.value || !phone.value || !email.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        $.ajax({
          url: "https://formspree.io/office@oksanaivanova.com", 
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        $(this).get(0).reset();
        showSuccess('#formSuccess');
        $($(this).parents('.oi-popup')).removeClass('mod-open');
        return;
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