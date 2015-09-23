$(document).ready(function () {

    $("#countrySelector").bind("change", function () {
        $("#formSelectPicker").trigger("submit");
    });

});




