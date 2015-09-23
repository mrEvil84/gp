var aud = aud || {};
aud.usage = {
    init: function () {
        $(".usage_channel_selection").on('change', function (e) {
            $(this).closest('form').trigger('submit');
        });
    }
};

$(document).ready(function () {
    aud.usage.init();
});
