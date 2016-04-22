$('#button').click(function(e) {
  e.preventDefault();
  var title = document.getElementById('title').value;
  var pi = document.getElementById('pi').value;
  var college = document.getElementById('college').value;
  var dept = document.getElementById('dept').value;
  var conferenceDate = document.getElementById('conferencedate').value;
  var location = document.getElementById('location').value;
  var purpose = document.getElementById('purpose').value;
  var amount = document.getElementById('amount').value;
  var attendees = document.getElementById('attendees').value;
  var submissionStatus = 'pending';
  var draft = 'draft';

  var GRANT_URL = 'http://internalgrantdev.azurewebsites.net/api/MGrants';

  $.ajax({
    url: GRANT_URL,
    method: 'POST',
    data: {
      "Title" : title,
      "PI" : pi,
      "College" : college,
      "Dept" : dept,
      "ConferenceDate" : conferenceDate,
      "Location" : location,
      "Purpose" : purpose,
      "Amount" : amount,
      "Attendees" : attendees,
      "SubmissionStatus" : 'pending',
      "Custom1" : null,
      "Custom2" : null,
      "Custom3" : null
    }
  })
  .done(function (result) {
    $('.clear-data').val('');
    var win = window.open(url, '_blank');
    win.focus();
  })
  .error(function(err) {
    alert('Something is not right');
  });
});



$('#save').click(function(e) {
  e.preventDefault();
  var title = document.getElementById('title').value;
  var pi = document.getElementById('pi').value;
  var college = document.getElementById('college').value;
  var dept = document.getElementById('dept').value;
  var conferenceDate = document.getElementById('conferencedate').value;
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
      "ConferenceDate" : conferenceDate,
      "Location" : location,
      "Purpose" : purpose,
      "Amount" : amount,
      "Attendees" : attendees,
      "SubmissionStatus" : 'draft',
      "Custom1" : null,
      "Custom2" : null,
      "Custom3" : null
    }
  })
  .done(function (result) {
    $('.clear-data').val('');
    alert('Your request has been saved.')
    // window.location.href('http://elliotts-macbook-air.local:5757/success.html');  // pota REDIRECT
  })
  .error(function(err) {
    alert('Something is not right');
  });
});
