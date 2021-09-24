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
        url: "http://0.0.0.0:5001/api/v1/places_search/",
        data: JSON.stringify({}),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            $.each(data, function (indexInArray, valueOfElement) {
                $('section.places').append('<article></article>');
                $('section.places article').append('<div></div>');
                $('section.places article div').addClass('title_box');
                $('section.places article div.title_box').append('<h2>' + data[indexInArray].name + '</h2>');
                $('section.places article div.title_box').append('<div></div>');
                $('section.places article div.title_box div').addClass('price_by_night');
                $('.price_by_night').append(data[indexInArray].price_by_night);
            });
        }
      });
});
