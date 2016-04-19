var id = window.location.hash.substring(1);

$.get('/MGrants/' + id)
  .done(function(res) {
    var grant = res.grants;

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

    $('#detail-view').append(theDiv);
  })
