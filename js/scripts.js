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

    function sendData(_this) {
      $.ajax({
        url: "https://formspree.io/office@oksanaivanova.com",
        method: "POST",
        data: _this.serialize(),
        dataType: "json"
      });
      $('.oi-form-control').removeClass('mod-filled');
      _this.get(0).reset();
    }

    $('#footerContacts').submit(function(e) {
      var name = document.getElementById('footerFormName'),
          phone = document.getElementById('footerFormPhone'),
          message = document.getElementById('footerFormMessage'),
          _this = $(this);

      if (!name.value || !phone.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        sendData(_this);
        showSuccess('.oi-section--success');
        return
      }
    });


    $('#consultContacts').submit(function(e) {
      var name = document.getElementById('consultFormName'),
          phone = document.getElementById('consultFormPhone'),
          email = document.getElementById('consultFormMail'),
          message = document.getElementById('consultFormMessage'),
          _this = $(this);

      if (!name.value || !phone.value || !email.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        sendData(_this);
        showSuccess('#formSuccess');
        $(_this.parents('.oi-popup')).removeClass('mod-open');
        return;
      }
    });


    $('#orderDesignContacts').submit(function(e) {
      var name = document.getElementById('orderDesignFormName'),
          phone = document.getElementById('orderDesignFormPhone'),
          email = document.getElementById('orderDesignFormMail'),
          message = document.getElementById('orderDesignFormMessage'),
          _this = $(this);

      if (!name.value || !phone.value || !email.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        sendData(_this);
        showSuccess('#formSuccess');
        $(_this.parents('.oi-popup')).removeClass('mod-open');
        return;
      }
    });


    $('#orderServiceContacts').submit(function(e) {
      var name = document.getElementById('orderServiceFormName'),
          phone = document.getElementById('orderServiceFormPhone'),
          email = document.getElementById('orderServiceFormMail'),
          message = document.getElementById('orderServiceFormMessage'),
          _this = $(this);

      if (!name.value || !phone.value || !email.value || !message.value) {
        return false;
      } else {
        e.preventDefault();
        sendData(_this);
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

    $('.oi-form-control').change(function() {
      if ($(this).val()) {
        $(this).addClass('mod-filled')
      } else {
        $(this).removeClass('mod-filled')
      }
    });
  });
})(jQuery);