$(document).ready(function () {

    if($('h3.form-error-title').length == 1) {

        if($('h3.form-error-title').html().length > 0) {
            $('div.form-group.form-name.form-error').show();
        } else {
            $('div.form-group.form-name.form-error').hide();
        }
    } else {
        $('div.form-group.form-name.form-error').hide();
    }

    $('#selectAct').change(function () {
        var selectedUsageId = $('#selectAct option:selected').val();
        getTelephonesForUsage(selectedUsageId);
        $('#SelectedUsageId').val(selectedUsageId);
    });

    $('#seoBacklinkActTelephone').change(function () {
        var selectedTelephoneId = $('#seoBacklinkActTelephone option:selected').val();
        $('#SelectedTelephoneId').val(selectedTelephoneId);
    });

    $('#seoBacklinkActCreateButton').click(function () {
        CreateSeoBacklinkAct();
    });

    $('#seoBacklinkActUpdateButton').click(function () {
        UpdateSeoBacklinkAct();

    });

});

var CreateSeoBacklinkAct = function () {
    var params = {};
    params.usageId = $('#selectAct option:selected').val();
    params.telephoneId = $('#seoBacklinkActTelephone option:selected').val();


    $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/SeoBacklinkAct/create',
        data: params,
        success: function (data, status, xhr) {
            if (data.success) {
                var url = $('#seoBacklinkActIndexUrl').val();
                $(location).attr("href", url);

            } else {
                $('h3.form-error-title').html(data.message);
                $('div.form-group.form-name.form-error').show();

            }
        }

    });
}

var UpdateSeoBacklinkAct = function () {
    var params = {};
    params.usageId = $('#selectAct option:selected').val();
    params.telephoneId = $('#seoBacklinkActTelephone option:selected').val();
    params.seoBacklinkActId = $('#seoBacklinkActId').val();

    $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/SeoBacklinkAct/update',
        data: params,
        success: function (data, status, xhr) {
            if (data.success) {
                var url = $('#seoBacklinkActIndexUrl').val();
                $(location).attr("href", url);
            } else {
                $('h3.form-error-title').html(data.message);
                $('div.form-group.form-name.form-error').show();
            }
        }
    });
}


var getTelephonesForUsage = function (usageId) {
    var params = {};
    params.usageId = usageId;

    $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/SeoBacklinksAct/getTelephones',
        data: params,
        success: function (data, status, xhr) {
            if (data.success) {
                var telephones = data.message;
                PopulateTelephoneNumbers(data.message);
            } else {
                $('h3.form-error-title').html(data.message);
                $('div.form-group.form-name.form-error').show();
            }
        }
    });
}


var PopulateTelephoneNumbers = function (telephones) {

    var items = '<option value="" selected>Select telephone number</option>';
    var i = 0;
    telephones.forEach(function (tel) {
        items += '<option value="' + tel.telephoneId + '">' + tel.telephoneNumber + '</option>';
        i++;
    });

    $('#seoBacklinkActTelephone').html('');
    $('#seoBacklinkActTelephone').html(items);

}