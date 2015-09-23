/**
 * Created by benjaminschoch on 09.07.15.
 */

var aud = aud || {};
aud.truncateText = {
    init: function () {
        var selector = '.truncate-text';
        $(selector).each(function () {
            if ($(this).hasClass('is_truncated')) {
                return;
            }
            $(this).addClass('is_truncated');
            var threshold = .9;
            var maxWidth = $(this).parent().width() * threshold;
            $(this).css({width: 'auto'}).parent().css({'white-space': 'nowrap'});
            var actualWidth = $(this).width();
            if (actualWidth > maxWidth) {
                $(this).width(maxWidth);
                if ($(this).hasClass('truncate-text-tooltip')) {
                    aud.truncateText.tooltip($(this));
                }
            }
        });
    },
    tooltip: function (el) {
        el.data('content', el.text());
        el.popover({
            trigger: "hover",
            placement: "top"
        });
    }
};

$(function () {
    aud.truncateText.init();
    $(document).on('ajax-request-finished', function () {
        aud.truncateText.init();
    });
});