$('#button').click(function(e) {
  e.preventDefault();
  var title = document.getElementById('title').value;
  var pi = document.getElementById('pi').value;
  var college = document.getElementById('college').value;
  var dept = document.getElementById('dept').value;
  var conferencedate = document.getElementById('conferencedate').value;
  var location = document.getElementById('location').value;
  var purpose = document.getElementById('purpose').value;
  var amount = document.getElementById('amount').value;
  var attendees = document.getElementById('attendees').value;

  var GRANT_URL = 'http://internalgrantdev.azurewebsites.net/api/MGrants';

  $.ajax({
    url: GRANT_URL,
    method: 'POST',
    data: {
      "Title" : title,
      "PI" : pi,
      "College" : college,
      "Dept" : dept,
      "ConferenceDate" : conferencedate,
      "Location" : location,
      "Purpose" : purpose,
      "Amount" : amount,
      "Attendees" : attendees,
      "Hidden" : "ThisFieldIsHidden"
    }
  })
  .done(function (result) {
    $('.clear-data').val('');
  })
  .error(function(err) {
    alert('Something is not right');
  });
});
