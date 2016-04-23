var grantId = window.location.hash.substring(1);

$('#edit').click(function() {
  $('.detail-view').removeClass('active');
  $(this).removeClass('active');
  $('#update').addClass('active');
});

function updateGrantView(grant) {
    var inputDiv = $('<div class="edits"></div>');
    var inputId = $('<input id="inputId" disabled/>').val(grant.Id);
    var inputTitle = $('<textarea id="inputTitle" rows="2"></textarea>').val(grant.Title);
    var inputPI = $('<input id="inputPI" />').val(grant['PI']);
    var inputCollege = $('<input id="inputCollege" />').val(grant.College);
    var inputDept = $('<input id="inputDept" />').val(grant.Dept);
    var inputConferenceDate = $('<input id="inputConferenceDate" />').val(grant.ConferenceDate);
    var inputLocation = $('<input id="inputLocation" />').val(grant.Location);
    var inputPurpose = $('<textarea id="inputPurpose" rows="5"></textarea>').val(grant.Purpose);
    var inputAmount = $('<input id="inputAmount" />').val(grant.Amount);
    var inputAttendees = $('<input id="inputAttendees" />').val(grant.Attendees);
    var inputSubmissionStatus = $('<input id="inputSubmissionStatus" />').val(grant.SubmissionStatus);
    var inputCustom1 = $('<input id="inputCustom1" />').val(grant.Custom1);
    var inputCustom2 = $('<input id="inputCustom2" />').val(grant.Custom2);
    var inputCustom3 = $('<input id="inputCustom3" />').val(grant.Custom3);
    var inputApprove = 'Approved';
    var inputReject = 'Rejected';
  
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
  
    $('<span>ID</span>').insertBefore('#inputId');
    $('<span>Title</span>').insertBefore('#inputTitle');
    $('<span>Principal Investigator</span>').insertBefore('#inputPI');
    $('<span>College</span>').insertBefore('#inputCollege');
    $('<span>Department</span>').insertBefore('#inputDept');
    $('<span>Conference Date</span>').insertBefore('#inputConferenceDate');
    $('<span>Location</span>').insertBefore('#inputLocation');
    $('<span>Purpose</span>').insertBefore('#inputPurpose');
    $('<span>Amount</span>').insertBefore('#inputAmount');
    $('<span>Attendees</span>').insertBefore('#inputAttendees');
    $('<span>Submission Status</span>').insertBefore('#inputSubmissionStatus');
  
  
  
  

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
  
  
        $(document).on('click', '#submit', function(e) {
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
                  "SubmissionStatus": 'Pending'
                }
            })
            .done(function(res) {
              alert('Your application has been submitted.');
            window.location.href = "requests.html";
//              location.reload();
            })
            .error(function(err) {
              alert('Something is not right');
            });
        });
  
  
  
  
  
  
//      $(document).on('click', '#approve', function(e) {
//      $.ajax('https://internalgrantdev.azurewebsites.net/api/MGrants/'+ grantId, {
//            method: 'PUT',
//            data: {
//              "Id": grantId,
//              "Title": inputTitle.val(),
//              "PI": inputPI.val(),
//              "College": inputCollege.val(),
//              "Dept": inputDept.val(),
//              "ConferenceDate": inputConferenceDate.val(),
//              "Location": inputLocation.val(),
//              "Purpose": inputPurpose.val(),
//              "Amount": inputAmount.val(),
//              "Attendees": inputAttendees.val(),
//              "SubmissionStatus": 'Approved'
//            }
//        })
//        .done(function(res) {
//          alert('This record is approved.');
//          location.reload();
//        })
//        .error(function(err) {
//          alert('Something is not right');
//        });
//    });
  
  
//      $(document).on('click', '#reject', function(e) {
//      $.ajax('https://internalgrantdev.azurewebsites.net/api/MGrants/'+ grantId, {
//            method: 'PUT',
//            data: {
//              "Id": grantId,
//              "Title": inputTitle.val(),
//              "PI": inputPI.val(),
//              "College": inputCollege.val(),
//              "Dept": inputDept.val(),
//              "ConferenceDate": inputConferenceDate.val(),
//              "Location": inputLocation.val(),
//              "Purpose": inputPurpose.val(),
//              "Amount": inputAmount.val(),
//              "Attendees": inputAttendees.val(),
//              "SubmissionStatus": 'Rejected'
//            }
//        })
//        .done(function(res) {
//          alert('This record is rejected.');
//          location.reload();
//        })
//        .error(function(err) {
//          alert('Something is not right');
//        });
//    });
}

var GRANT_URL = 'https://internalgrantdev.azurewebsites.net/api/MGrants/';

$.get(GRANT_URL + grantId)
    .done(function(res) {
        updateGrantView(res);
    });
