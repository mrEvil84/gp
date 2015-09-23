var aud = aud || {};
aud.location = {
    init: function () {
        var deleteTeamIcons = $("i#deleteTeam.icon.minus-sign");
        var deleteRegionIcons = $("i#deleteRegion.icon.minus-sign");

        this.bindDefaultRegionRadio();
        this.bindDefaultTelephoneRadio();

        $(document).on('ajax-request-finished', function (e, selector) {
            aud.location.bindDefaultRegionRadio();
            aud.location.bindDefaultTelephoneRadio();
        });

        deleteTeamIcons.click(function (e) {
            var teamId = $(this).data('id');
            var confirmationMessage = $(this).data('confirmation-message');
            confirmationDialog('aud.location.deleteTeam(' + teamId + ')', confirmationMessage);
        });

        deleteRegionIcons.click(function (e) {
            $(this).parents("tr").remove();
            var regionId = $(this).data('id');
            var confirmationMessage = $(this).data('confirmation-message');
            confirmationDialog('aud.location.deleteRegion(' + regionId + ')', confirmationMessage);
        });
    },
    bindDefaultTelephoneRadio: function(){
        $(".default-telephone-radio").on("click", function () {
            aud.location.setDefaultTelephone($(this));
        });
    },
    bindDefaultRegionRadio: function(){
        $(".default-region-radio").on("click", function () {
            aud.location.setDefaultRegion($(this));
        });
    },
    deleteRegion: function (regionId) {
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/location/region/delete',
            data: {regionId: regionId}
        }).done(function (data, status, xhr) {
            if (data.success) {
                window.location.reload();
                return true;
            } else {
                $('h3.form-error-title').html(data.message);
                $('div.form-group.form-name.form-error').show();
            }
        });
    },
    deleteTeam: function (teamId) {
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/location/team/delete',
            data: {teamId: teamId}
        }).done(function (data, status, xhr) {
            if (data.success) {
                window.location.reload();
                return true;
            } else {
                $('h3.form-error-title').html(data.message);
                $('div.form-group.form-name.form-error').show();
            }
        });
    },
    setDefaultRegion: function (radio) {
        var idSelected = radio.val();
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/location/region/default',
            data: {
                regionId: idSelected
            },
            error: function (data, status, xhr) {
                alert('An error occurred while setting the default region.')
            }
        });
    },
    setDefaultTelephone: function (radio) {
        var idSelected = radio.val();
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/telephone/default',
            data: {
                regionId: idSelected
            },
            error: function (data, status, xhr) {
                alert('An error occurred while setting the default phone number.')
            }
        });
    }
};

$(document).ready(function () {
    aud.location.init();
});