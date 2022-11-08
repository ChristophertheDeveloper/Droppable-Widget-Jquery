$(document).ready(function () {
    $('#source li').draggable({
        helper: 'clone',
        revert: 'invalid'
    });

    $('#divCountries').droppable({
        accept: 'li[data-value="country"]',
        drop: function (event, ui) {
            $('#countries').append(ui.draggable);
        }
    });

    $('#divCities').droppable({
        accept: 'li[data-value="city"]',
        drop: function (event, ui) {
            $('#cities').append(ui.draggable);
        }
    });
});

