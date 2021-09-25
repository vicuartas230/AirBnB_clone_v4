document.addEventListener('DOMContentLoaded', function () {
  const storeAmenity = {};
  $('UL LI INPUT:checkbox').change(function () { // ("input[type=checkbox]")
    if ($(this).is(':checked')) {
      storeAmenity[$(this).attr('data-id')] = $(this).attr('data-name'); // or .data('name')
    } else {
      delete storeAmenity[$(this).attr('data-id')];
    }
    $('.amenities H4').html(Object.values(storeAmenity).join(', '));
  });
});
