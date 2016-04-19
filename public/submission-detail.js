var id = window.location.hash.substring(1);

function updateGrantView(grant) {
  var detailDiv = $('<div></div>')
  var id = $('<div>' + grant.Id + '</div>');
  var title = $('<div>' + grant.Title + '</div>');
  var pI = $('<div>' + grant['PI'] + '</div>');
  var college = $('<div>' + grant.College + '</div>');
  var dept = $('<div>' + grant.Dept + '</div>');
  var conferenceDate = $('<div>' + grant.ConferenceDate + '</div>');
  var location = $('<div>' + grant.Location + '</div>');
  var purpose = $('<div>' + grant.Purpose + '</div>');
  var amount = $('<div>' + grant.Amount + '</div>');
  var attendees = $('<div>' + grant.Attendees + '</div>');
  var submissionStatus = $('<div>' + grant.SubmissionStatus + '</div>');
  var custom1 = $('<div>' + grant.Custom1 + '</div>');
  var custom2 = $('<div>' + grant.Custom2 + '</div>');
  var custom3 = $('<div>' + grant.Custom3 + '</div>');
  detailDiv.append(id)
        .append(title)
        .append(pI)
        .append(college)
        .append(dept)
        .append(conferenceDate)
        .append(location)
        .append(purpose)
        .append(amount)
        .append(attendees)
        .append(submissionStatus)
        .append(custom1)
        .append(custom2)
        .append(custom3);

  var inputDiv = $('<div></div>');
  var inputId = $('<input />').val(grant.Id);
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
        .append(inputSubmissionStatus)
        .append(inputCustom1)
        .append(inputCustom2)
        .append(inputCustom3);


  $('#detail-view').append(detailDiv);
  $('#edit-view').append(inputDiv);
}

$.get('/grants/' + id)
  .done(function(res) {
    updateGrantView(res.grant);
  })


$(document).on('click', '#update', function(e) {
  var GRANT_URL = 'http://internalgrantdev.azurewebsites.net/api/MGrants/' + inputId;
  alert(GRANT_URL);
//  $('/grants', {
//    url: GRANT_URL,
//    method: 'POST',
//    data: {
//      "Title" : title,
//      "PI" : pi,
//      "College" : college,
//      "Dept" : dept,
//      "ConferenceDate" : conferencedate,
//      "Location" : location,
//      "Purpose" : purpose,
//      "Amount" : amount,
//      "Attendees" : attendees
//    }
//  })
//  .done(function(res) {
//    updateGrantView(res.grant);
//  })
//  .error(function(err) {
//    alert('Something is not right');
//  });




    $.ajax({
      url: GRANT_URL,
      method: 'POST',
      data: {
        "Id" : inputId,
        "Title" : title,
        "PI" : pi,
        "College" : college,
        "Dept" : dept,
        "ConferenceDate" : conferencedate,
        "Location" : location,
        "Purpose" : purpose,
        "Amount" : amount,
        "Attendees" : attendees
      }
    })
    
    .done(function (result) {
      alert('it is done');
    })
    .error(function(err) {
      alert('Something is not right');
    });
  });

