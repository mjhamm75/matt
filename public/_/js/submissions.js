$.get('/grants')
  .done(function(res) {
    var grants = res.grants;
    var ul = $("<ul class='list'></ul>");

    grants.forEach(function(grant) {
      var url = "submission-detail.html#" + grant.Id;
      var viewApplication = $('<div class="view-this"><a href="' + url +'" id="view">View</a></div>');
      var deleteApplication = $('<div class="delete-this"><a href="#">Delete</a></div>');
      var li = $('<li id="' + grant.Id + '" class="request"></li>');
      var id = $('<div>' + grant.Id + '</div>');
      var title = $('<div><a href="' + url +'" id="view">' + grant.Title + '</a></div>');
      var pi = $('<div>' + grant['PI'] + '</div>');
      var college = $('<div>' + grant.College + '</div>');
      var dept = $('<div>' + grant.Dept + '</div>');
      var conferenceDate = $('<div>' + grant.ConferenceDate + '</div>');
      var location = $('<div>' + grant.Location + '</div>');
      var purpose = $('<div>' + grant.Purpose + '</div>');
      var amount = $('<div>' + grant.Amount + '</div>');
      var attendees = $('<div>' + grant.Attendees + '</div>');
      var submissionStatus = $('<div class="approve-this">' + grant.SubmissionStatus + '</div>');
//      var Custom1 = $('<div>' + grant.Custom1 + '</div>');
//      var Custom2 = $('<div>' + grant.Custom2 + '</div>');
//      var Custom3 = $('<div>' + grant.Custom3 + '</div>');
//      li.append(id)
      li.append(title)
        .append(pi)
//        .append(college)
//        .append(dept)
//        .append(conferenceDate)
//        .append(location)
//        .append(purpose)
//        .append(amount)
//        .append(attendees)
        .append(submissionStatus)
//        .append(custom1)
//        .append(custom2)
//        .append(custom3)
        .append(viewApplication)
        .append(deleteApplication);

      ul.append(li);
      
      
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
