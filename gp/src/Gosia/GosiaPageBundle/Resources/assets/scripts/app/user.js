var aud = aud || {};
aud.user = {
    messages: {
        confirmDeactivate: 'Are you sure you want to deactivate this user?',
        confirmDelete: 'Are you sure you want to DELETE this user?'
    },
    allCountriesField: null,
    defaultCountryField: null,
    init: function () {
        $(".user-toggle").on('mousedown', function (e) {
            var alreadyEnabled = $(this).prop('checked');
            if (alreadyEnabled) {
                if (confirm(aud.user.messages.confirmDeactivate)) {
                    window.location.replace($(this).data('path'));
                    return true;
                }
            } else {
                window.location.replace($(this).data('path'));
            }

            return false;
        });

        $(".user-delete").on('click', function (e) {
            return confirm(aud.user.messages.confirmDelete);
        });

        this.bindCountrySelectorDependency();
    },
    getAllCountriesField: function () {
        if (this.allCountriesField === null) {
            this.allCountriesField = $('select[name="user_countries[]"]');
        }

        return this.allCountriesField;
    },
    getDefaultCountryField: function () {
        if (this.defaultCountryField === null) {
            this.defaultCountryField = $('select[name="campaigntool_campaigntoolbundle_user[defaultCountry]"]');
        }

        return this.defaultCountryField;
    },
    bindCountrySelectorDependency: function () {
        this.getAllCountriesField().on('change', function () {
            aud.user.limitDefaultCountryOptions();
        }).trigger('change');
    },
    getDefaultCountryFieldDisabledContainer: function () {
        var hiddenDisabled = this.getDefaultCountryField().parent().find('.hidden-disabled');
        if (!hiddenDisabled.length) {
            this.getDefaultCountryField().before('<span style="display: none" class="hidden-disabled"></span>');
            hiddenDisabled = this.getDefaultCountryField().parent().find('.hidden-disabled');
        }

        return hiddenDisabled;
    },
    allowedValues: [],
    limitDefaultCountryOptions: function () {
        aud.user.allowedValues = [];
        var options = this.getAllCountriesField().find(':selected');
        options.each(function () {
            aud.user.allowedValues.push($(this).val());
        });

        this.getDefaultCountryFieldDisabledContainer().find('option')
            .appendTo(this.getDefaultCountryField());

        this.getDefaultCountryField().find('option').each(function () {
            if ($.inArray($(this).val(), aud.user.allowedValues) === -1) {
                $(this).appendTo(aud.user.getDefaultCountryFieldDisabledContainer());
            }
        });

        this.getDefaultCountryField().selectpicker('refresh');
    }
};

$(document).ready(function () {
    aud.user.init();
});
