$.get('/grants')
  .done(function(res) {
    var grants = res.data.grants;
    var ul = $("<ul class='list'></ul>");


    grants.forEach(function(grant) {
      var viewApplication = $('<div>View</div>');
      var deleteApplication = $('<div>Delete</div>');
      var li = $('<li id="' + grant.Id + '" class="request"></li>');
      var theId = $('<div>' + grant.Id + '</div>');
      var theTitle = $('<div>' + grant.Title + '</div>');
      var thePI = $('<div>' + grant.['PI'] + '</div>');
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
      li.append(theId)
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
        .append(theCustom3)
        .append(viewApplication)
        .append(deleteApplication);
        
      ul.append(li);
    });



    $('#detail-view').append(ul);
  });
