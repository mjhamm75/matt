$('#button').on('click', function(e) {
  e.preventDefault();
  var title = $('#title');
  var pi = $('#pi');

  $.ajax('https://internalgrantdev.azurewebsites.net/api/Grants/', {
    method: 'POST'
  })
  .done(function (result) {
    debugger;
  })
  .error(function(err) {
    debugger;
    // $('#error-message').innerHtml("Is Broken")
  })
})

function clear(element) {
  element[0].value = "";
}
