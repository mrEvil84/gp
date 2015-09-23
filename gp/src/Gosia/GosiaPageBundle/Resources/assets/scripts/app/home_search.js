/**
 * Created by benjaminschoch on 15.07.15.
 */
/**
 * Created by sebastiandaehnrich on 30.04.15.
 */
var aud = aud || {};
aud.homeSearch = {
    init: function () {
        this.bindSearch('.unassigned_campaigns_container');
        this.bindSearch('.existing_usages_container');
    },
    bindSearch: function (containerSelector) {

        var form = $(containerSelector).find('form[name=searchForm]');

        form.on('submit', function (e) {
            e.preventDefault();
            var formName = $(this).attr('name');
            var inputField = $(this).find('input[type=text]');
            var searchKey = inputField.attr('id').replace(formName + '_', '');
            var searchTerm = inputField.val();
            aud.homeSearch.doAjaxRequest(searchKey, searchTerm, containerSelector);

            return false;
        });
    },
    doAjaxRequest: function (key, term, containerSelector) {
        var href = encodeURI('/?' + key + '=' + term);
        var ajaxContainerSelector = containerSelector + ' .result_container';
        $(ajaxContainerSelector).addClass(aud.pagination.config.ajaxContainerClass);
        aud.pagination.doAjaxLoad(ajaxContainerSelector, href);

    },
    getUsageAliases: function(usageId, dialogTitleMessage, parent) {
        var params = {};
        params.usageId = usageId;
        params.dialogTitleMessage = dialogTitleMessage;

        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/getAliasesNames',
            data: params,
            success: function (data, status, xhr) {
                if (data.success) {
                    $('#dialog-description').html(data.message);
                }
            }
        });

    },
    popupInformation: function(dialogTitleMessage, callbackFunction, callbackFunctionArgs) {
        var params = {};
        params.dialogTitleMessage = dialogTitleMessage;

        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/popupInformation',
            data: params,
        }).done(function(data,status,xhr){
            if (data.success) {
                aud.informationPopup.informationDialog(data.message);
                aud.informationPopup.bindCloseFunction('#popup_confirm_no');

                if(callbackFunction && callbackFunctionArgs){
                    callbackFunction(callbackFunctionArgs.usageId,callbackFunctionArgs.dialogTitleMessage,callbackFunctionArgs.parent);
                }

        }
        });
    }
};

$(document).ready(function () {
    aud.homeSearch.init();

    $('#countrySelector').selectpicker({
        size: 20
     });

});

$(document).on('click','.moreAliases',function(e){
    var params = {};

    params.usageId = $(this).data('usage-id');
    params.dialogTitleMessage = $(this).data('dialog-title-message');
    params.parent = $(this).parent();

    aud.homeSearch.popupInformation(params.dialogTitleMessage,aud.homeSearch.getUsageAliases, params);

});
