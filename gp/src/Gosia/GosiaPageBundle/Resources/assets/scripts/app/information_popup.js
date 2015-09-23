
var aud = aud || {};

aud.informationPopup = {
    bindCloseFunction: function(selector) {
        $(selector).on('click',function(){
            $('#dialog-wrapper').html('');
        });
    },
    informationDialog: function(content) {
        $('#dialog-wrapper').html(content);
    }
};
