$.get('/MGrants')
  .done(function(res) {
    var grants = res.grants;
    var ul = $('<ul></ul>');

    grants.forEach(function(grant) {
      var url = "application-edit.html#" + grant.Id;
      var viewApplication = $('<a href="' + url +'" id="view">View</a>');
      var deleteApplication = $('<a href="#">Delete</a>');
      viewApplication.on('click', function() {
        $("#detail-view").load("/MGrants/" + grant.Id);
      });
      deleteApplication.on('click', function(e) {
        e.preventDefault();
        $.ajax('/MGrants/' + grant.Id, {
          method: 'DELETE'
        })
        .done(function(res) {
          $(li).remove();
        });
      });


      var li = $('<li id="application' + grant.Id + '"></li>');
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

    $('#list-view').append(ul);
  });
