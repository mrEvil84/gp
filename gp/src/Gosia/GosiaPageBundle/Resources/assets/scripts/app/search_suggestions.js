var aud = aud || {};
aud.searchSuggestions = {
    loaded: [],
    init: function () {
        var searchFieldRouting = {
            '#searchForm_usage_keyword': '/getUsageSuggestions',
            '#searchForm_unassigned_campaign_keyword': '/getUnassignedCampaignSuggestions'
        };

        for (var fieldId in searchFieldRouting) {
            if (searchFieldRouting.hasOwnProperty(fieldId)) {
                if (!$(fieldId).length || this.loaded.indexOf(fieldId) !== -1) {
                    continue;
                }
                this.loaded.push(fieldId);
                this.prepareSuggestions(fieldId, searchFieldRouting[fieldId])
            }
        }
    },
    prepareSuggestions: function (fieldId, path) {
        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: path
        }).done(function (data, status, xhr) {
            if (data.success && data.suggestions) {
                var options = jQuery.makeArray(data.suggestions);
                $(fieldId).typeahead({
                    source: options,
                    items: -1,
                    minLength: 2,
                    autoSelect: false,
                    afterSelect: function () {
                        $(fieldId).closest('form').trigger('submit');
                    },
                    displayText: function (name) {
                        if (name.length > 45) {
                            name = name.substr(0, 43) + '...';
                        }
                        return name;
                    }
                }).bind('keyup', function (e) {
                    if (e.keyCode === 13) {
                        $(this).closest('form').trigger('submit');
                    }
                });
            }
        });
    }
};

$(document).ready(function () {
    aud.searchSuggestions.init();
});
