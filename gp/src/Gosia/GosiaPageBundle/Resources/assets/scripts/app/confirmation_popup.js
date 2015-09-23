var confirmationDialog = function (funcYes, confirmMessage) {
    $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/popupConfirmation',
        data:  {
            funcYes: funcYes,
            confirmMessage: confirmMessage
        }
    }).done(function (data, status, xhr) {
        if (data.success) {
            $('#dialog-wrapper').html(data.message);
        }
    });
}

var confirmationDialogNoAnswer = function () {
    $('#dialog-wrapper').html('');
    window.location.reload();
}
