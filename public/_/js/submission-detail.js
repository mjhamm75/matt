var grantId = window.location.hash.substring(1);

$('#edit').click(function() {
  $('.detail-view').removeClass('active');
  $(this).removeClass('active');
  $('#update').addClass('active');
});

//$('#approve').click(function() {
//  $.ajax('https://internalgrantdev.azurewebsites.net/api/MGrants/'+ grantId, {
//        method: 'PUT',
//        data: {
//          "Id": grantId,
//          "SubmissionStatus": 'Approved'
//        }
//    })
//    .done(function(res) {
//      alert('approved!');
//    })
//    .error(function(err) {
//      alert('Something is not right');
//    });
//});

$('#reject').click(function() {
  alert('rejected!');
});

function updateGrantView(grant) {
    var inputDiv = $('<div class="edits"></div>');
    var inputId = $('<input disabled/>').val(grant.Id);
    var inputTitle = $('<input />').val(grant.Title);
    var inputPI = $('<input />').val(grant['PI']);
    var inputCollege = $('<input />').val(grant.College);
    var inputDept = $('<input />').val(grant.Dept);
    var inputConferenceDate = $('<input />').val(grant.ConferenceDate);
    var inputLocation = $('<input />').val(grant.Location);
    var inputPurpose = $('<input />').val(grant.Purpose);
    var inputAmount = $('<input />').val(grant.Amount);
    var inputAttendees = $('<input />').val(grant.Attendees);
    var inputSubmissionStatus = $('<input />').val(grant.SubmissionStatus);
    var inputCustom1 = $('<input />').val(grant.Custom1);
    var inputCustom2 = $('<input />').val(grant.Custom2);
    var inputCustom3 = $('<input />').val(grant.Custom3);
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
        .append(inputSubmissionStatus);
//        .append(inputCustom1)
//        .append(inputCustom2)
//        .append(inputCustom3);

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
  
      $(document).on('click', '#approve', function(e) {
      $.ajax('https://internalgrantdev.azurewebsites.net/api/MGrants/'+ grantId, {
            method: 'PUT',
            data: {
              "Id": grantId,
              "Title": inputTitle.val(),
              "PI": inputPI.val(),
              "College": inputCollege.val(),
              "Dept": inputDept.val(),
              "ConferenceDate": inputConferenceDate.val(),
              "Location": inputLocation.val(),
              "Purpose": inputPurpose.val(),
              "Amount": inputAmount.val(),
              "Attendees": inputAttendees.val(),
              "SubmissionStatus": 'Approved'
            }
        })
        .done(function(res) {
          alert('This record is approved.');
          updateGrantView(res.grant);  // i don't think i need this here do i
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
