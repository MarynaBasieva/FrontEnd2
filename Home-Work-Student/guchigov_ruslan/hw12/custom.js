jQuery(document).ready(function () {
  jQuery('.call-us').on('click', function () {
    jQuery('.home3').show('slow');
  });
  jQuery('.closed').on('click', function () {
    jQuery('.home3').fadeOut('fast');
  })
});
