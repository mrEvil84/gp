var chosen = "";
if ($('#referrerRegionNameResults').length) {
    $(document).keydown(function (e) {
        var referrerRegionNameResults = $('#referrerRegionNameResults');
        if (!(referrerRegionNameResults.is(':empty'))) {
            if (e.keyCode == 40) {
                if (chosen === "") {
                    chosen = 0;
                } else if ((chosen + 1) < itemsCount) {
                    chosen++;
                }
                $('li.referrerRegionListItem').removeClass('selected');
                $('li.referrerRegionListItem:eq(' + chosen + ')').addClass('selected');

                var itemName = $('p.referrerRegionItem-' + chosen).html();
                $("#referrerRegionName").val(itemName);

                var itemId = $('input.referrerRegionItemId-' + chosen).val();
                $("#referrerRegionId").val(itemId);

                GetTelephoneNumbersForRegion(itemId);

                return false;
            }

            if (e.keyCode == 38) {
                if (chosen === "") {
                    chosen = 0;
                } else if (chosen > 0) {
                    chosen--;
                }
                $('li.referrerRegionListItem').removeClass('selected');
                $('li.referrerRegionListItem:eq(' + chosen + ')').addClass('selected');

                var itemName = $('p.referrerRegionItem-' + chosen).html();
                $("#referrerRegionName").val(itemName);

                var itemId = $('input.referrerRegionItemId-' + chosen).val();
                $("#referrerRegionId").val(itemId);

                GetTelephoneNumbersForRegion(itemId);

                return false;
            }

            if (e.keyCode == 27) {
                referrerRegionNameResults
                    .hide()
                    .html("")
                    .blur();
                return false;
            }

        }
    });
}

var itemsCount = 0;

var ShowResultsReferrerRegionName = function (data) {

    var results = '<ul class="referrerRegionList">';

    var i = 0;

    data.forEach(function (entry) {
        //console.log('regionName'+ entry.regionName + ' id ' + entry.regionId);

        if (i === 0) {
            results += '<li class ="referrerRegionListItem selected">' + '<p onclick="setRegion(\'' + entry.regionId + '\',\'' + entry.regionName + '\')" class="referrerRegionItem-' + i + '">' + entry.regionName + '</p>' + '<input type="hidden" class="referrerRegionItemId-' + i + '" value="' + entry.regionId + '" />' + '</li>';
        } else {
            results += '<li class ="referrerRegionListItem">' + '<p onclick="setRegion(\'' + entry.regionId + '\',\'' + entry.regionName + '\')" class="referrerRegionItem-' + i + '">' + entry.regionName + '</p>' + '<input type="hidden" class="referrerRegionItemId-' + i + '" value="' + entry.regionId + '" />' + '</li>';
        }
        i++;
    });
    results += '</ul>';

    $("#referrerRegionNameResults").html(results);
    $("#referrerRegionNameResults").show();

    itemsCount = i;
}


var setRegion = function (regionId, regionName) {
    $('#referrerRegionName').val(regionName);
    $('#referrerRegionId').val(regionId);
    $('#referrerRegionNameResults').hide();
    GetTelephoneNumbersForRegion(regionId);
}


var PopulateTelephoneSelectBox = function (data) {

    //console.log(data);
    $('#referrerTelephone').html('');
    var items = '<option class="referrerSelectOption-0" value="" selected>Select telephone number</option>';
    var i = 0;
    data.forEach(function (entry) {
        items += '<option class="referrerSelectOption-' + i + '" value="' + entry.telephoneId + '">' + entry.telephoneNumber + '</option>';
        i++;
    });

    $('#referrerTelephone').html(items);
}


var ClearResultsReffererRegionName = function () {
    $("#referrerRegionNameResults").html('');
    $("#referrerRegionNameResults").hide();
}

var GetTelephoneNumbersForRegion = function (regionId) {

    var params = {};
    params.regionId = regionId;

    $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/referrerGetTelephones',
        data: params,
        success: function (data, status, xhr) {
            if (data.success) {
                //console.log(data.message);
                PopulateTelephoneSelectBox(data.message);
            } else {
                alert('No telephones for region.');
            }
        }
    });
}

$(document).ready(function () {

    $('#referrerCreateButton').click(function () {
        var params = {};
        params.referrerName = $('#referrerName').val();
        params.referrerTelephoneId = $("#referrerTelephone option:selected").val();
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/referrer/create',
            data: params,
            success: function (data, status, xhr) {
                if (data.success) {
                    var url = $('#referrerIndexUrl').val();
                    $(location).attr("href", url);

                } else {
                    $('h3.form-error-title').html(data.message);
                    $('div.form-group.form-name.form-error').show();
                }
            }

        });
    });

    $('#referrerUpdateButton').click(function () {

        var params = {};
        params.referrerId = $('#referrerId').val();
        params.referrerName = $('#referrerName').val();
        params.referrerTelephoneId = $("#referrerTelephone option:selected").val();

        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/referrer/update',
            data: params,
            success: function (data, status, xhr) {
                if (data.success) {
                    var url = $('#referrerIndexUrl').val();
                    $(location).attr("href", url);
                } else {
                    $('h3.form-error-title').html(data.message);
                    $('div.form-group.form-name.form-error').show();
                }
            }
        });
    });

    var referrerRegionName = $("#referrerRegionName").val();

    $('#referrerRegionName').keyup(function (e) {
        if ($('#referrerRegionName').val() != content) {
            var regionName = $('#referrerRegionName').val();

            if (regionName.length === 0 || !regionName) {
                ClearResultsReffererRegionName();
            } else {
                var params = {};
                params.regionName = regionName;

                $.ajax({
                    method: 'POST',
                    dataType: 'json',
                    url: '/referrerGetRegions',
                    data: params,
                    success: function (data, status, xhr) {
                        if (data.success) {
                            ShowResultsReferrerRegionName(data.message);
                        } else {
                            alert('No regions in database.');
                        }
                    }

                });
            }
        }
    });

});




