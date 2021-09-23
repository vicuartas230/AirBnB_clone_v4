document.addEventListener('DOMContentLoaded', function () {
    const storeAmenity = {};
    const listStore = [];
    let idx;
    $('UL LI INPUT:checkbox').change(function () { // ("input[type=checkbox]")
        if ($(this).is(':checked')) {
            storeAmenity[$(this).attr('data-id')] = $(this).attr('data-name'); // or .data('name')
            listStore.push(Object.values(storeAmenity));
            //alert('hola');
        } else {
            console.log(listStore)
            idx = listStore.indexOf('Iron');
            console.log(idx)
            delete listStore[idx];
        }
        //$('.amenities H4').text('hola')
        $('.amenities H4').text(listStore);
    });
});
