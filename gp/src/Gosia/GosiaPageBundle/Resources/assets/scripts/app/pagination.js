var aud = aud || {};
aud.pagination = {
    config: {
        tempContainer: 'paginationTemp',
        tempCount: 0,
        first: '&laquo;',
        prev: '&lt;',
        next: '&gt;',
        last: '&raquo;',
        ajaxContainerClass: 'ajax-container'
    },
    init: function () {
        var selector = '.pagination-wrapper';
        var paginationContainer = $(selector);

        if (paginationContainer.length) {
            paginationContainer.show();
            paginationContainer.find('> .pagination').each(function () {
                if (!$(this).data('setup')) {
                    aud.pagination.setup($(this));
                }
            });
        }
    },
    preAjaxLoad: function (container) {
        var currentContainerHeight = $(container + '.' + aud.pagination.config.ajaxContainerClass).height();
        var currentContainerWidth = $(container + '.' + aud.pagination.config.ajaxContainerClass).width();

        $(container + '.' + aud.pagination.config.ajaxContainerClass).css({
            height: currentContainerHeight,
            width: currentContainerWidth
        }).html('<span class="preloading"></span>');
    },
    doAjaxLoad: function (container, href) {
        this.preAjaxLoad(container);

        var tempContainer = this.createTempContainer();
        tempContainer.load(href + ' ' + container, function () {
            var targetContainer = $(container + '.' + aud.pagination.config.ajaxContainerClass);
            tempContainer.wrapInner('<div class="temp_dimension_test"></div>');
            var dimensionContainer = tempContainer.find('> .temp_dimension_test');
            dimensionContainer.css({
                width: targetContainer.width()
            });

            targetContainer.animate({
                height: dimensionContainer.height()
            }, 500, function () {
                targetContainer.html(tempContainer.html());
                targetContainer.css({
                    height: 'auto',
                    width: 'auto'
                });

                tempContainer.remove();
                targetContainer.data('loading', false);

                $(document).trigger('ajax-request-finished', [container + '.' + aud.pagination.config.ajaxContainerClass]);
            });
        });
    },
    createTempContainer: function () {
        if (!$(aud.pagination.config.tempContainer).length) {
            $('body').append('<div id="' + aud.pagination.config.tempContainer + '"></div>');
        }
        var tempContainer = $('#' + aud.pagination.config.tempContainer);
        tempContainer.html('')
            .css({
                width: '2000px',
                height: 'auto',
                position: 'absolute',
                left: '-2500px',
                overflow: 'hidden'
            });

        return tempContainer;
    },
    setup: function (paginationContainer) {
        if (!paginationContainer.data('total')) {
            return false;
        }

        this.setupPrevNextLinks(paginationContainer);
        this.bindPages(paginationContainer);

        $(paginationContainer.data('container')).addClass(aud.pagination.config.ajaxContainerClass);

        if (paginationContainer.data('visible')) {
            this.resizePaginationContainer(paginationContainer);
        }

        paginationContainer.data('setup', true);
    },
    setupPrevNextLinks: function (paginationContainer) {
        var nextLink = '<li class="page page-step" data-target="next"><a href="#">' + aud.pagination.config.next + '</a></li>';
        var lastLink = '<li class="page page-step" data-target="last"><a href="#">' + aud.pagination.config.last + '</a></li>';
        var firstLink = '<li class="page page-step" data-target="first"><a href="#">' + aud.pagination.config.first + '</a></li>';
        var prevLink = '<li class="page page-step" data-target="prev"><a href="#">' + aud.pagination.config.prev + '</a></li>';
        paginationContainer.append(nextLink + lastLink);
        paginationContainer.prepend(firstLink + prevLink);
    },
    bindPages: function (paginationContainer) {
        paginationContainer.find('.page').click(function (e) {
            var target = aud.pagination.getTargetFromPageItem($(this));
            aud.pagination.goToPage(target, paginationContainer);

            e.preventDefault();
            return false;
        });
    },
    goToPage: function (target, paginationContainer) {
        if (target === 'last') {
            target = paginationContainer.data('total');
        } else if (target === 'first') {
            target = 1;
        }

        if (
            target > paginationContainer.data('total') ||
            target < 1 ||
            target == paginationContainer.data('current')
        ) {
            return false;
        }

        var ajaxContainer = paginationContainer.data('container');

        if (!$(ajaxContainer).data('loading')) {
            $(ajaxContainer).data('loading', true);

            var pageItem = paginationContainer.find('li[data-target="' + target + '"]');
            var pageLink = pageItem.find('> a');
            var href = pageLink.attr('href');
            paginationContainer.data('current', target);

            this.resizePaginationContainer(paginationContainer);

            paginationContainer.find('.active').removeClass('active');
            pageItem.addClass('active');
            this.doAjaxLoad(ajaxContainer, href);
        }
    },
    getTargetFromPageItem: function (el) {
        var paginationContainer = el.closest('.pagination');
        var currentPage = paginationContainer.data('current');
        var target = el.data('target');
        switch (target) {
            case 'next':
                target = currentPage + 1;
                break;
            case 'prev':
                target = currentPage - 1;
                break;
        }

        return target;
    },
    resizePaginationContainer: function (container) {
        var limit = container.data('visible');
        var total = container.data('total');
        var current = container.data('current');
        var addPagesCount = Math.floor(limit / 2);
        var rangeFrom = 1;
        var rangeTo = limit;

        if (current > (total - addPagesCount)) {
            rangeFrom = total - limit;
            rangeTo = total;
        } else if (current > (addPagesCount + 1)) {
            rangeFrom = current - addPagesCount;
            rangeTo = current + addPagesCount;
        }

        container.find('.page').each(function () {
            var target = $(this).data('target');
            if (isNaN(target)) {
                $(this).show();
            }
            if (target < rangeFrom || target > rangeTo) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }
};

$(document).ready(function () {
    aud.pagination.init();

    $(document).on('ajax-request-finished', function (e, selector) {
        aud.pagination.init();
    });
});