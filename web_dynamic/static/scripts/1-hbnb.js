document.addEventListener('DOMContentLoaded', function () {
    $('UL LI INPUT:checkbox').change(() => {
        let storeAmenity = dict()
        if ($(this).is(':checked')) {
            storeAmenity[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            alert('unchecked');
        }
    });
});
