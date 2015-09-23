/**
 * Created by sebastiandaehnrich on 30.04.15.
 */


$(document).ready(function () {
    $(".categories_list_wrapper h2, .arrow-right").on("click", function () {
        $("#content").toggleClass("sidebarClosed");
    });
});