jQuery(document).ready(function () {
  jQuery('.take-order').on('click', function () {
    jQuery('.lab').show('slow');
  });
  jQuery('.closed').on('click', function () {
    jQuery('.lab').fadeOut('fast');
  });
  jQuery('.lab').mouseup(function (e) {
    let modal = $("#modal-wrap");
    if (!modal.is(e.target)
      && modal.has(e.target).length === 0) {
      jQuery('.lab').fadeOut('fast');
    }
  });
  jQuery('.lab').on('keyup', function (e) {
    if (e.key == "Escape") {
      jQuery('.lab').fadeOut('fast');
    }
  });
});


