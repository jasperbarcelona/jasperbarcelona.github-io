function load_btn(btn) {
  $(btn).html($(btn).attr('data-loading-text'));
  $(btn).attr('disabled', true);
}

function complete_btn(btn, keep_disabled=true) {
  $(btn).html($(btn).attr('data-complete-text'));
  if (!keep_disabled) {
    $(btn).attr('disabled', false);
  }
  else {
    $(btn).attr('disabled', true);
  }
}

function show_form() {
  $('#inquiryModal').modal('show');
}

function save_inquiry() {
  load_btn($('#sendInquiryBtn'));

  if (!validate_inquiry()) {
    complete_btn($('#sendInquiryBtn'), false);
  }

  else {
    // var name = $('#inquiryName').val()
    // var email = $('#inquiryEmail').val()
    // var msisdn = $('#inquiryMsisdn').val()
    // var message = $('#inquiryMessage').val()

    // $.post('/inquiry/save',
    // {
    //   name:name,
    //   email:email,
    //   msisdn:msisdn,
    //   message:message
    // },
    // function(data){
    //   complete_btn($('#sendInquiryBtn'), false);
    //   if (data['status'] == 'success') {
        $('#inquiryModal .form-control').val('');
        $('#inquiryModal').modal('hide');
        $('#thankYouModal').modal('show');
      // }
    //   else {
    //     $('#errorModal').modal('show');
    //   }
    // });
  }
}

function validate_inquiry() {
  missing_fields = []
  $('#inquiryModal .form-control').removeClass('error-field');
  $('#inquiryModal .required').each(function () {
    if (($(this).val() == '') || ($(this).val() == null)) {
      $(this).addClass('error-field');
      missing_fields.push($(this).attr('id'));
    }
  });
  if (missing_fields.length != 0) {
    return false;
  }

  return true;
}

function save_message() {
  load_btn($('#sendMessageBtn'));

  if (!validate_message()) {
    complete_btn($('#sendMessageBtn'), false);
  }

  else {
    // var name = $('#contactName').val()
    // var email = $('#contactEmail').val()
    // var msisdn = $('#contactMsisdn').val()
    // var message = $('#contactMessage').val()

    // $.post('/inquiry/save',
    // {
    //   name:name,
    //   email:email,
    //   msisdn:msisdn,
    //   message:message
    // },
    // function(data){
    //   complete_btn($('#sendMessageBtn'), false);
    //   if (data['status'] == 'success') {
        $('.contact-right .form-control').val('');
        $('#thankYouModal').modal('show');
    //   }
    //   else {
    //     $('#errorModal').modal('show');
    //   }
    // });
  }
}

function validate_message() {
  missing_fields = []
  $('.contact-right .form-control').removeClass('error-field');
  $('.contact-right .required').each(function () {
    if (($(this).val() == '') || ($(this).val() == null)) {
      $(this).addClass('error-field');
      missing_fields.push($(this).attr('id'));
    }
  });
  if (missing_fields.length != 0) {
    return false;
  }

  return true;
}



function show_about() {
  $(window).animate({scrollTop:$('.about-page').offset().top - ($('.content-nav').height() + 10)}, 500);
  $('.content-nav-opt').removeClass('active');
  $('#aboutNav').addClass('active');
}

function show_services() {
  $(window).animate({scrollTop:$('.services-page').offset().top - ($('.content-nav').height() + 10)}, 500);
  $('.content-nav-opt').removeClass('active');
  $('#servicesNav').addClass('active');
}

function show_get_started() {
  $(window).animate({scrollTop:$('.get-started-page').offset().top - ($('.content-nav').height() + 10)}, 500);
  $('.content-nav-opt').removeClass('active');
  $('#getStartedNav').addClass('active');
}

function show_contact() {
  $(window).animate({scrollTop:$('.contact-page').offset().top - ($('.content-nav').height() + 10)}, 500);
  $('.content-nav-opt').removeClass('active');
  $('#contactNav').addClass('active');
}