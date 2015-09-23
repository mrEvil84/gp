/**
 * Created by benjaminschoch on 10.08.15.
 */
var aud = aud || {};
aud.categoryTree = {
    init: function () {
        var els = $('.tree-edit');
        this.prepareEditItems(els);
    },
    prepareEditItems: function (els) {
        els.each(function () {
            var el = $(this);
            el.data('original', el.text());
            el.after('<span class="icon glyphicon-minus-sign inline-delete-link"></span>');
            el.after('<span class="icon glyphicon-edit inline-edit-link"></span>');
            el.parent().find('.inline-edit-link').click(function (e) {
                e.preventDefault();
                var el = $(this).parent().find('.tree-edit');
                aud.categoryTree.toggleFormField(el);
                return false;
            });
            el.parent().find('.inline-delete-link').click(function (e) {
                e.preventDefault();
                if (confirm('Are you sure you want to delete this category?')) {
                    var el = $(this).parent().find('.tree-edit');
                    aud.categoryTree.deleteCategory(el);
                }
                return false;
            });
        });
    },
    deleteCategory: function (el) {
        $.ajax({
            method: 'POST',
            url: '/deleteChannel',
            data: {
                id: el.data('id'),
                type: el.data('type')
            }
        }).done(function (data, status, xhr) {
            alert(data.message);
            if (data.success) {
                window.location.reload();
                return true;
            }
        });
    },
    resetAllFormFields: function () {
        $('.tree-edit').each(function () {
            $(this)
                .html($(this).data('original'))
                .parent()
                .addClass('view-mode')
                .removeClass('edit-mode');
        });
    },
    toggleFormField: function (el) {
        aud.categoryTree.resetAllFormFields();
        el
            .html(this.getFormField(el))
            .parent()
            .addClass('edit-mode')
            .removeClass('view-mode');
        this.bindFormFields(el);
    },
    getFormField: function (el) {
        var field = '<div class="inline-edit-form">' +
            '<input type="text" class="inline-edit-field" value="' + el.text() + '">' +
            '<span class="icon glyphicon-remove-sign inline-edit-abort"></span>' +
            '<span class="icon glyphicon-ok-sign inline-edit-save"></span>' +
            '</div>';

        return field;
    },
    bindFormFields: function (el) {
        el.parent().find('.inline-edit-abort').click(function (e) {
            e.preventDefault();
            aud.categoryTree.resetAllFormFields();
            return false;
        });

        el.parent().find('.inline-edit-save').click(function (e) {
            e.preventDefault();
            aud.categoryTree.saveForm($(this));
            return false;
        });

        el.find('input').keyup(function (e) {
            if (e.which == 13) {
                el.closest('.tree-edit').find('.inline-edit-save').trigger('click');
                return false;
            }
        })
    },
    saveForm: function (el) {
        var formField = el.closest('.tree-edit');
        var value = formField.find('input').val();
        var type = formField.data('type');
        var id = formField.data('id');

        $.ajax({
            method: 'POST',
            url: '/updateChannel',
            data: {
                value: value,
                type: type,
                id: id
            }
        }).done(function (data, status, xhr) {
            alert(data.message);
            if (data.success) {
                window.location.reload();
                return true;
            }
        });
    }
};

$(document).ready(function () {
    aud.categoryTree.init();
});