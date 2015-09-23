var aud = aud || {};
aud.costs = {
    lastRequestParams: {},
    init: function () {
        var currentDay = new Date();
        var currentMonth = currentDay.getMonth();
        var currentYear = currentDay.getFullYear();

        $('.months option[value="' + (currentMonth + 1) + '"], ' +
            '.years option[value="' + currentYear + '"]')
            .attr('selected', 'selected');

        $(".display_costs").on("click", function (e) {
            if ($(this).hasClass('disabled')) {
                return false;
            }
            $(".display_costs, .display_costs_favorite").addClass('disabled');

            e.preventDefault();

            var params = aud.costs.lastRequestParams;
            var addParams = {
                favorite: false,
                month: $('.months option:selected').val(),
                year: $('.years option:selected').val()
            };
            $.extend(params, addParams);
            aud.costs.displayData(params);
        });

        $(".display_costs_favorite").on("click", function (e) {
            if ($(this).hasClass('disabled')) {
                return false;
            }
            $(".display_costs, .display_costs_favorite").addClass('disabled');

            e.preventDefault();
            var params = aud.costs.lastRequestParams;
            var addParams = {
                favorite: true,
                month: $('.months option:selected').val(),
                year: $('.years option:selected').val()
            };
            $.extend(params, addParams);

            aud.costs.displayData(params);
        }).trigger('click');

        $("input[name='costsearch_keyword']").on('keypress', function (e) {
            var THIS_IS_THE_ENTER_KEY = 13;
            if (e.keyCode === THIS_IS_THE_ENTER_KEY) {
                $(this).trigger('change');
            }
        }).on('change', function () {
            var params = aud.costs.lastRequestParams;
            var addParams = {
                month: $('.months option:selected').val(),
                year: $('.years option:selected').val(),
                searchKeyword: $(this).val()
            };
            $.extend(params, addParams);
            aud.costs.displayData(params);
        });

        $("select[name='cost_type']").on('change', function (e) {
            var selectedChannel = $(this).val();
            var params = aud.costs.lastRequestParams;
            params.marketingChannel = '';
            params.controllingChannel = '';

            if (selectedChannel) {
                if (selectedChannel.match(/mc_.*/)) {
                    params.marketingChannel = selectedChannel.replace(/mc_(.*)/, '$1');
                } else if (selectedChannel.match(/cc_.*/)) {
                    params.controllingChannel = selectedChannel.replace(/cc_(.*)/, '$1');
                } else {
                    alert('Invalid channel selected');
                    return false;
                }
            }

            aud.costs.displayData(params);
        });

        $(window).resize(function () {
            aud.costs.scaleCostTableContainer();
        });
    },
    generateTable: function (container, objectData, currencies) {
        var currentMonth = $('.months option:selected').val();
        var currentYear = $('.years option:selected').val();
        var dataDayPrefix = 'costs.year' + currentYear + 'month' + currentMonth + 'day';
        this.scaleCostTableContainer();
        var hot = new Handsontable(container, {
            data: objectData,
            maxRows: objectData.length,
            fillHandle: true,
            contextMenu: false,
            fixedColumnsLeft: 4,
            manualColumnFreeze: true,
            colWidths: [25, 30, 150, 200, 70],
            height: function () {
                return aud.costs.getCostTableContainerHeight();
            },
            width: function () {
                return aud.costs.getCostTableContainerWidth();
            },
            colHeaders: ['', 'Fav', 'ACT', 'Usage Cost', 'CUR', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
            currentRowClassName: 'active_row',
            currentColClassName: 'active_col',
            columns: this.getColumns(dataDayPrefix, currencies),
            cells: function (row, col, prop) {
                var cellProperties = {};
                var favorite = this.instance.getDataAtRowProp(row, 'favorite');
                var act = this.instance.getDataAtRowProp(row, 'actUsage');
                var currency = this.instance.getDataAtRowProp(row, 'currency');
                var name = this.instance.getDataAtRowProp(row, 'costName');

                if (favorite === "" && act === "" && currency === "" && name !== "") {
                    cellProperties.readOnly = true;
                    cellProperties.type = 'text';
                } else if (favorite === "" && prop === 'favorite') {
                    cellProperties.readOnly = true;
                    cellProperties.type = 'text';
                }

                return cellProperties;
            },
            afterChange: function (changes, source) {
                if (changes && changes.length) {
                    var ajaxParams = {};

                    for (var key in changes) {
                        if (changes.hasOwnProperty(key)) {
                            var row = changes[key][0];
                            var dataType = changes[key][1];
                            var oldValue = changes[key][2];
                            var value = changes[key][3];

                            ajaxParams[key] = aud.costs.prepareUpdateRequestParams(this, row, dataType, value, oldValue);
                        }
                    }

                    $.ajax({
                        method: 'POST',
                        url: '/updateCost',
                        data: ajaxParams,
                        success: function (data, status, xhr) {
                            if (!data.success) {
                                alert(data.message);
                            }
                        }
                    });
                }
            }
        });
    },

    getColumns: function (dataDayPrefix, currencies) {
        var columns = [
            {
                data: 'delete',
                renderer: this.deleteButtonRenderer
            },
            {
                data: 'favorite',
                type: 'checkbox'
            },
            {
                data: 'actUsage',
                readOnly: true
            },
            {
                data: 'costName'
            },
            {
                data: 'currency',
                type: 'dropdown',
                source: currencies
            }
        ];

        for (var i = 1; i <= 31; i++) {
            columns.push(
                {data: dataDayPrefix + i, type: 'numeric', format: '0.00', validator: Handsontable.NumericValidator}
            );
        }

        return columns;
    },

    deleteButtonRenderer: function (table, td, row, col, prop, value, cellProperties) {
        td.innerHTML = '<span class="ht-delete-button">x</span>';

        $(td).find(".ht-delete-button")
            .data(aud.costs.prepareUpdateRequestParams(table, row, 'delete'))
            .on("click", function (e) {
                e.preventDefault();
                if (confirm('Are you sure you want to delete this row?')) {
                    aud.costs.deleteRow($(this).data(), table, row);
                }
                return false;
            });

        return td;
    },

    deleteRow: function (params, table, row) {
        /** due to batch support, this has to be an object */
        params = {0: params};
        $.ajax({
            method: 'DELETE',
            dataType: 'json',
            url: '/updateCost',
            data: params
        }).done(function (data) {
            if (!data.success) {
                if (data.message) {
                    alert(data.message);
                } else {
                    alert('An error occured. Please try again.')
                }
                aud.costs.reloadLastDisplayData();
            } else {
                table.alter('remove_row', row);
            }
        });
    },

    prepareUpdateRequestParams: function (obj, row, dataType, value, oldValue) {
        var params = {
            month: $('.months option:selected').val(),
            year: $('.years option:selected').val()
        };

        var lengthOfCosts = ('costs.year' + params.year + 'month' + params.month + 'day').length;
        var col = dataType.substr(lengthOfCosts, dataType.length);
        var costId = obj.getDataAtRowProp(row, 'costName');
        var costActUsage = obj.getDataAtRowProp(row, 'act');
        if (!costActUsage) {
            costActUsage = obj.getDataAtRowProp(row, 'id');
        }
        var currencyField = obj.getDataAtRowProp(row, 'currency');
        params.row = row;
        params.day = col;
        params.costName = costId;
        params.actUsage = costActUsage;
        params.costValue = value;
        params.currencyISO = currencyField;
        params.dataType = dataType;
        params.oldValue = oldValue;
        if (!col.length && dataType === "currency") {
            params.changeCurrency = true;
        }

        return params;
    },

    getCostTableContainerHeight: function () {
        var contentContainer = $('#content');
        var headerHeight = $('.menu_wrapper').outerHeight(true);
        var contentTop = $('.cost-table-navigation').outerHeight(true);
        var contentSpacing = contentContainer.outerHeight(true) - contentContainer.innerHeight();
        var sub = headerHeight + contentTop + contentSpacing;
        var height = $(window).height() - sub;
        var costTableWrapper = $('.cost_table');
        var verticalMargin = costTableWrapper.outerHeight(true) - costTableWrapper.height();

        height -= verticalMargin;

        return height;
    },

    getCostTableContainerWidth: function () {
        return $('.cost_table').parent().width();
    },

    scaleCostTableContainer: function () {
        var height = this.getCostTableContainerHeight();
        var width = this.getCostTableContainerWidth();

        $('.cost_table').css({
            height: height,
            width: width
        });
    },

    displayData: function (params) {
        var container = document.getElementById('display_costs_container');
        container.innerHTML = '';

        var ajaxLoader = $("#ajax_loader");
        if (ajaxLoader.is(':empty')) {
            ajaxLoader.html('<img class="ajax.loader" id="loader-img" alt="ajax-preloader" src="/assets/images/ajax-preloader-middle.gif" width="100" height="100" align="center" />');
        }

        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/display',
            data: params

        }).done(function (data) {
            if (data.success && data.content && data.content.length) {
                aud.costs.generateTable(container, data.content, data.currencies);
                aud.costs.lastRequestParams = params;
            } else if (data.message) {
                alert(data.message);
            } else {
                $(container).html('No Results');
            }

            if (!ajaxLoader.is(':empty')) {
                ajaxLoader.html("");
            }
            $(".display_costs, .display_costs_favorite").removeClass('disabled');
        }).fail(function () {
            alert('An error occured. Please try again!');
        });
    },

    reloadLastDisplayData: function () {
        if (!jQuery.isEmptyObject(this.lastRequestParams)) {
            this.displayData(this.lastRequestParams);
        }
    }
};

$(document).ready(function () {
    aud.costs.init();
});
