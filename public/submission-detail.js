var id = window.location.hash.substring(1);

function updateGrantView(grant) {
  var theDiv = $('<div></div>')
  var theId = $('<div>' + grant.Id + '</div>');
  var theTitle = $('<div>' + grant.Title + '</div>');
  var thePI = $('<div>' + grant['PI'] + '</div>');
  var theCollege = $('<div>' + grant.College + '</div>');
  var theDept = $('<div>' + grant.Dept + '</div>');
  var theConferenceDate = $('<div>' + grant.ConferenceDate + '</div>');
  var theLocation = $('<div>' + grant.Location + '</div>');
  var thePurpose = $('<div>' + grant.Purpose + '</div>');
  var theAmount = $('<div>' + grant.Amount + '</div>');
  var theAttendees = $('<div>' + grant.Attendees + '</div>');
  var theSubmissionStatus = $('<div>' + grant.SubmissionStatus + '</div>');
  var theCustom1 = $('<div>' + grant.Custom1 + '</div>');
  var theCustom2 = $('<div>' + grant.Custom2 + '</div>');
  var theCustom3 = $('<div>' + grant.Custom3 + '</div>');
  theDiv.append(theId)
        .append(theTitle)
        .append(thePI)
        .append(theCollege)
        .append(theDept)
        .append(theConferenceDate)
        .append(theLocation)
        .append(thePurpose)
        .append(theAmount)
        .append(theAttendees)
        .append(theSubmissionStatus)
        .append(theCustom1)
        .append(theCustom2)
        .append(theCustom3);

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
  inputDiv.append(theId)
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


  $('#detail-view').append(theDiv);
  $('#edit-view').append(inputDiv);
}

$.get('/grants/' + id)
  .done(function(res) {
    updateGrantView(res.grant);
  })


$(document).on('click', '#update', function(e) {
  $('/grants', {
    method: 'POST',
    data: {

    }
  })
  .done(function(res) {
    updateGrantView(res.grant);
  });
})
