document.addEventListener('DOMContentLoaded', function () {
    $('UL INPUT:checkbox').change(function (e) {
        if ($(this).is(':checked')) {
            alert('checked');
        }
        else {
            alert('unchecked');
        }
    });
});
