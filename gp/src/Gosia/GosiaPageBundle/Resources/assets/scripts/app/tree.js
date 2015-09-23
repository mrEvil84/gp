$(function () {

    function treeSetup(cl, category, collapse) {
        if (!$(cl).length) {
            return;
        }
        collapse = (typeof collapse !== "undefined" && collapse);
        $('.tree > ul > li').addClass('parent_li');
        $(cl + ' li .item').on('click', function (e) {
            var children = $(this).parent('li').find(' > ul > li, .input-tree');
            if (children.length > 0) {
                $(this).find(' > i').toggleClass("arrow-right").toggleClass("arrow-down");
                if (children.is(":visible")) {
                    children.hide('fast');
                } else {
                    children.show('fast');
                }
            } else {
                $(cl).find(".activeCat").removeClass("activeCat");
                $(this).addClass("activeCat");
                var parentCat = $(".tree .activeCat").parent().parent().parent().find("> span.item span").html()
                var clickedCat = $(this).find(" > span").html();
                $(category + " .assigned-cat").html(" / " + parentCat + " / " + clickedCat);
                $(category).closest('form').find('[type=submit]').removeClass('disabled');
            }

            e.stopPropagation();
        });

        $(cl).closest('form').find('[type=submit]').addClass('disabled');
    }

    treeSetup(".tree-parent-cat", ".form-category", true);
    $('.tree-parent-cat .parent_li > .item').each(function () {
        var children = $(this).parent('li').find(' > ul > li, .input-tree');
        if (children.length > 0) {
            $(this).find(' > i').toggleClass("arrow-right").toggleClass("arrow-down");
            if (children.is(":visible")) {
                children.hide('fast');
            } else {
                children.show('fast');
            }
        }
    });
    treeSetup(".tree-campaign-aliases", ".form-camp-aliases");

});
