/**
 * Created by sebastiandaehnrich on 30.04.15.
 */


$(document).ready(function () {
    $(".notification-center").css("top", -1 * $(".notification-center").outerHeight());
    var notifications = $(".notification-list li").length;
    if (notifications > 0) {
        setTimeout(function () {
            $(".notification-center").removeAttr("style");
            $(".notification-center").css("visibility", "visible");
        }, 2000);
    }
});
