document.addEventListener('DOMContentLoaded', function () {
  const storeAmenity = {};
  const listStore = [];
  let idx;
  $('UL LI INPUT:checkbox').change(function () { // ("input[type=checkbox]")
    if ($(this).is(':checked')) {
      storeAmenity[$(this).attr('data-id')] = $(this).attr('data-name'); // or .data('name')
      listStore.push(Object.values(storeAmenity)[0]);
    } else {
      idx = listStore.indexOf($(this).attr('data-name'));
      listStore.splice(idx, 1);
    }
    $('.amenities H4').html(listStore.join(', '));
  });
});
