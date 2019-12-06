/* start Sitecore.Foundation.Forms.js */
$(document).ready(function () {
    $(".form-submit-border").prepend("<button onclick=optOutEvent() class='btn-link' data-dismiss='modal'>No thanks</button>");
});

function optOutEvent() {
    var eventId = $("#wffmEvent").data("eventid");
    $.ajax({
        url: '/api/sitecore/ExtendedForm/OptOutClicked',
        type: "GET",
        datatype: "json",
        contenttype: 'application/json; charset=utf-8',
        data: { eventId: eventId },
        context: this,
        success: function (data) {
            console.log("event triggered");
        },
        error: function (xhr) {

            console.log('error');
        }
    });
}

$(document).ready(function () {
    $("#_formModal").trigger('click');
    $(".form-submit-border input").addClass("preloader-trigger");// .waves-button-input 
});
/* end Sitecore.Foundation.Forms.js */