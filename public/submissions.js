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
      var Id = $('<div>' + grant.Id + '</div>');
//      var Title = $('<div>' + grant.Title + '</div>');
      var Title = $('<div><a href="' + url +'" id="view">' + grant.Title + '</a></div>');
      var PI = $('<div>' + grant['PI'] + '</div>');
      var College = $('<div>' + grant.College + '</div>');
      var Dept = $('<div>' + grant.Dept + '</div>');
      var ConferenceDate = $('<div>' + grant.ConferenceDate + '</div>');
      var Location = $('<div>' + grant.Location + '</div>');
      var Purpose = $('<div>' + grant.Purpose + '</div>');
      var Amount = $('<div>' + grant.Amount + '</div>');
      var Attendees = $('<div>' + grant.Attendees + '</div>');
      var SubmissionStatus = $('<div>' + grant.SubmissionStatus + '</div>');
      var Custom1 = $('<div>' + grant.Custom1 + '</div>');
      var Custom2 = $('<div>' + grant.Custom2 + '</div>');
      var Custom3 = $('<div>' + grant.Custom3 + '</div>');
//      li.append(Id)
      li.append(Title)
        .append(PI)
        .append(College)
//        .append(Dept)
        .append(ConferenceDate)
//        .append(Location)
//        .append(Purpose)
//        .append(Amount)
//        .append(Attendees)
//        .append(SubmissionStatus)
//        .append(Custom1)
//        .append(Custom2)
//        .append(Custom3)
//        .append(viewApplication)
        .append(deleteApplication);

      ul.append(li);
      
      
      Title.on('click', function() {
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
