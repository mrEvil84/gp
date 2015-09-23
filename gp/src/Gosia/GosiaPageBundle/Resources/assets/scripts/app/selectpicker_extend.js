$(document).ready(function(){
    $("select.selectpicker").focus(function(){
        $(this).next(".bootstrap-select").find('.selectpicker').focus();
    });
});