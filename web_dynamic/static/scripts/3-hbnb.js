document.addEventListener('DOMContentLoaded', function () {
    const storeAmenity = {};
    const listStore = Array();
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
    $.getJSON("http://127.0.0.1:5001/api/v1/status", function (data) {
            if (data.status === 'OK') {
                $('div#api_status').addClass('available');
            } else {
                $('div#api_status').removeClass('available');
            }
        }
    );
    $.ajax({
        type: "POST",
        url: "http://172.28.253.12:5001/api/v1/places_search/",
        data: JSON.stringify({}),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data, function (indexInArray, valueOfElement) {
                (data[indexInArray].max_guest !== 1) ? a = ' Guests' : a = ' Guest';
                (data[indexInArray].number_rooms !== 1) ? b = ' Bedrooms' : b = ' Bedroom';
                (data[indexInArray].number_bathrooms !== 1) ? c = ' Bathrooms' : c = ' Bathroom';
                $('section.places').append(
                    '<article>\
                        <div class="title_box">\
                            <h2>' + data[indexInArray].name + '</h2>\
                            <div class="price_by_night">$' + data[indexInArray].price_by_night + '</div>\
                        </div>\
                        <div class="information">\
                            <div class="max_guest">' + data[indexInArray].max_guest + a + '</div>\
                            <div class="number_rooms">' + data[indexInArray].number_rooms + b + '</div>\
                            <div class="number_bathrooms">' + data[indexInArray].number_bathrooms + c + '</div>\
                        </div>\
                        <div class="description">' + data[indexInArray].description + '</div>\
                    </article>');
            });
        }
      });
});
