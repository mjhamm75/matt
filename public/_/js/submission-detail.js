var grantId = window.location.hash.substring(1);

$('#edit').click(function() {
  $('.detail-view').removeClass('active');
  $(this).removeClass('active');
  $('#update').addClass('active');
});

function updateGrantView(grant) {
    var inputDiv = $('<div class="edits"></div>');
    var inputId = $('<span>ID</span><input disabled/>').val(grant.Id);
    var inputTitle = $('<span>Title</span><input />').val(grant.Title);
    var inputPI = $('<span>Principal Investigator</span><input />').val(grant['PI']);
    var inputCollege = $('<span>College</span><input />').val(grant.College);
    var inputDept = $('<span>Department</span><input />').val(grant.Dept);
    var inputConferenceDate = $('<span>Conference Date</span><input />').val(grant.ConferenceDate);
    var inputLocation = $('<span>Location</span><input />').val(grant.Location);
    var inputPurpose = $('<span>Purpose</span><input />').val(grant.Purpose);
    var inputAmount = $('<span>Amount</span><input />').val(grant.Amount);
    var inputAttendees = $('<span>Attendees</span><input />').val(grant.Attendees);
    var inputSubmissionStatus = $('<span>Submission Status</span><input />').val(grant.SubmissionStatus);
    var inputCustom1 = $('<span>Custom 1</span><input />').val(grant.Custom1);
    var inputCustom2 = $('<span>Custom 2</span><input />').val(grant.Custom2);
    var inputCustom3 = $('<span>Custom 3</span><input />').val(grant.Custom3);
    inputDiv.append(inputId)
        .append(inputTitle)
        .append(inputPI)
        .append(inputCollege)
        .append(inputDept)
        .append(inputConferenceDate)
        .append(inputLocation)
        .append(inputPurpose)
        .append(inputAmount)
        .append(inputAttendees)
        .append(inputSubmissionStatus)
        .append(inputCustom1)
        .append(inputCustom2)
        .append(inputCustom3);

    $('#edit-view').append(inputDiv);

    $(document).on('click', '#update', function(e) {
//      e.preventDefault();
      $('.detail-view').addClass('active');
      $(this).removeClass('active');
      $('#edit').addClass('active');
        $.ajax('https://internalgrantdev.azurewebsites.net/api/MGrants/'+ grantId, {
                method: 'PUT',
                data: {
                    "Id": inputId.val(),
                    "Title": inputTitle.val(),
                    "PI": inputPI.val(),
                    "College": inputCollege.val(),
                    "Dept": inputDept.val(),
                    "ConferenceDate": inputConferenceDate.val(),
                    "Location": inputLocation.val(),
                    "Purpose": inputPurpose.val(),
                    "Amount": inputAmount.val(),
                    "Attendees": inputAttendees.val(),
                    "SubmissionStatus": inputSubmissionStatus.val(),
                    "Custom1": inputCustom1.val(),
                    "Custom2": inputCustom2.val(),
                    "Custom3": inputCustom3.val()
                }
            })
            .done(function(res) {
              alert('This record has been updated.');
              updateGrantView(res.grant);
            })
            .error(function(err) {
              alert('Something is not right');
            });
    });
}

var GRANT_URL = 'https://internalgrantdev.azurewebsites.net/api/MGrants/';

$.get(GRANT_URL + grantId)
    .done(function(res) {
        updateGrantView(res);
    });
