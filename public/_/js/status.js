$.get('/grants')
  .done(function(res) {
    var grants = res.grants;
    var ul = $("<ul class='list'></ul>");

    grants.forEach(function(grant) {
      
      
      var url = "submission-detail.html#" + grant.Id;
      var viewApplication = $('<a href="' + url +'" id="view">View</a>');
      var deleteApplication = $('<div><a href="#">Delete</a></div>');
//      viewApplication.on('click', function() {
//        $("#detail-view").load("/grants/" + grant.Id);
//      });      
      var li = $('<li id="' + grant.Id + '" class="request"></li>');
      var id = $('<div>' + grant.Id + '</div>');
//      var Title = $('<div>' + grant.Title + '</div>');
      var title = $('<div><a href="' + url +'" id="view">' + grant.Title + '</a></div>');
      var pi = $('<div>' + grant['PI'] + '</div>');
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
      
      var notice = 'There are no drafts available.'
      
      if(grant.SubmissionStatus !== 'draft') {
                  //      li.append(id)
        li.append(title)
          .append(pi)
//          .append(college)
  //        .append(Dept)
//          .append(conferenceDate)
  //        .append(Location)
  //        .append(Purpose)
  //        .append(Amount)
  //        .append(Attendees)
//          .append(submissionStatus)
  //        .append(Custom1)
  //        .append(Custom2)
  //        .append(Custom3)
  //        .append(viewApplication)
//          .append(deleteApplication);
      
        ul.append(li);
      }
      
      // pota ADD MESSAGE IF THERE ARE NO DRAFTS (ADDING IT HERE THOUGH IS WITHIN A LOOP SO YOU'LL GET MULTIPLE MESSAGES)
      
      title.on('click', function() {
        $("#detail-view").load("/grants/" + grant.Id);
      });
      deleteApplication.on('click', function(e) {
        e.preventDefault();
        $.ajax('/grants/' + grant.Id, {
          method: 'DELETE'
        })
        .done(function(res) {
          $(li).remove();
        });
      });
    });
      $('#list-view').append(ul);
  });