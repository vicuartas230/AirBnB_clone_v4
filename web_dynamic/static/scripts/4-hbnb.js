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
  $.getJSON('http://127.0.0.1:5001/api/v1/status', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  }
  );
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify({}),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      let guestNums;
      let bedroomNums;
      let bathroomNums;
      $.each(data, function (indexInArray, valueOfElement) {
        (data[indexInArray].max_guest !== 1) ? guestNums = ' Guests' : guestNums = ' Guest';
        (data[indexInArray].number_rooms !== 1) ? bedroomNums = ' Bedrooms' : bedroomNums = ' Bedroom';
        (data[indexInArray].number_bathrooms !== 1) ? bathroomNums = ' Bathrooms' : bathroomNums = ' Bathroom';
        $('section.places').append(
          '<article>' +
              '<div class="title_box">' +
                  '<h2>' + data[indexInArray].name + '</h2>' +
                  '<div class="price_by_night">$' + data[indexInArray].price_by_night + '</div>' +
              '</div>' +
              '<div class="information">' +
                  '<div class="max_guest">' + data[indexInArray].max_guest + guestNums + '</div>' +
                  '<div class="number_rooms">' + data[indexInArray].number_rooms + bedroomNums + '</div>' +
                  '<div class="number_bathrooms">' + data[indexInArray].number_bathrooms + bathroomNums + '</div>' +
              '</div>' +
              '<div class="description">' + data[indexInArray].description + '</div>' +
          '</article>');
      });
    }
  });
  $('BUTTON[type=button]').click(function () {
    $('section.places').empty();
    $.ajax({
      type: "POST",
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      data: JSON.stringify({amenities: Object.keys(storeAmenity)}),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        let guestNums;
        let bedroomNums;
      let bathroomNums;
      $.each(data, function (indexInArray, valueOfElement) {
        (data[indexInArray].max_guest !== 1) ? guestNums = ' Guests' : guestNums = ' Guest';
        (data[indexInArray].number_rooms !== 1) ? bedroomNums = ' Bedrooms' : bedroomNums = ' Bedroom';
        (data[indexInArray].number_bathrooms !== 1) ? bathroomNums = ' Bathrooms' : bathroomNums = ' Bathroom';
        $('section.places').append(
          '<article>' +
              '<div class="title_box">' +
                  '<h2>' + data[indexInArray].name + '</h2>' +
                  '<div class="price_by_night">$' + data[indexInArray].price_by_night + '</div>' +
              '</div>' +
              '<div class="information">' +
                  '<div class="max_guest">' + data[indexInArray].max_guest + guestNums + '</div>' +
                  '<div class="number_rooms">' + data[indexInArray].number_rooms + bedroomNums + '</div>' +
                  '<div class="number_bathrooms">' + data[indexInArray].number_bathrooms + bathroomNums + '</div>' +
              '</div>' +
              '<div class="description">' + data[indexInArray].description + '</div>' +
          '</article>');
      });
      }
    });
  });
});
