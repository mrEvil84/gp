var unassignCampaign = function (campaignAliasId, usageId) {
    var params = {
        campaignAliasId: campaignAliasId,
        usageId :usageId
    };

    var ajaxLoader = $("#ajax_loader");
    if (ajaxLoader.is(':empty')) {
        ajaxLoader.html('<img class="ajax.loader" id="loader-img" alt="ajax-preloader" src="/assets/images/ajax-preloader-middle.gif" width="100" height="100" align="center" />');
    }

    $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/unassign',
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
}
