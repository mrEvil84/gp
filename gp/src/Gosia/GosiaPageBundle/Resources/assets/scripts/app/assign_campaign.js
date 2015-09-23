var aud = aud || {};
aud.assignCampaigns = {
    init: function () {
        this.bindResultRows('.unassigned_campaigns_container');
        this.bindResultRows('.existing_usages_container');
    },
    assign: function () {
        var unassignedCampaigns = [];

        $('input[name="unassignCampaignsId"]:checked').each(function () {
            unassignedCampaigns.push($(this).val());
        });
        var usageId = $('input[name="usageId"]:checked').val();

        var params = {
            unassignCampaigns: unassignedCampaigns,
            usageId: usageId
        };

        this.doAjaxRequest(params);
    },
    doAjaxRequest: function (params) {
        var ajaxLoader = $("#ajax_loader");
        if (ajaxLoader.is(':empty')) {
            ajaxLoader.html('<img class="ajax.loader" id="loader-img" alt="ajax-preloader" src="/assets/images/ajax-preloader-middle.gif" width="100" height="100" align="center" />');
        }
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/assign',
            data: params
        }).done(function (data, status, xhr) {
            alert(data.message);
            if (data.success) {
                window.location.reload();
                return true;
            }

            if (!ajaxLoader.is(':empty')) {
                ajaxLoader.html("");
            }
        });
    },
    bindResultRows: function (container) {
        var rows = $(container + " tr");
        rows.on("click", function (e) {
            if (e.target.tagName.toLowerCase() !== 'input') {
                var input = $(this).find('input[type="checkbox"], input[type="radio"]');
                var checked = !input.prop("checked");
                if (input.attr('type') === 'radio') {
                    checked = true;
                }
                input.prop("checked", checked);
            }

            var checkedCampaigns = $(".unassigned_campaigns_container input:checked").length;
            var checkedUsages = $(".existing_usages_container input[type='radio']:checked").length;
            var assignButton = $(".assign_campaign");
            if (checkedCampaigns > 0 && checkedUsages > 0) {
                assignButton
                    .removeClass("aud-btn-cancel")
                    .addClass("aud-btn")
                    .on("click", function () {
                        aud.assignCampaigns.assign()
                    });
            } else {
                assignButton
                    .addClass("aud-btn-cancel")
                    .removeClass("aud-btn")
                    .off("click");
            }
        });
    }
};

$(document).ready(function () {
    aud.assignCampaigns.init();

    $(document).on('ajax-request-finished', function (e, selector) {
        aud.assignCampaigns.bindResultRows(selector);
    });
});
