var id = window.location.hash.substring(1);

$.get('/MGrants/' + id)
  .done(function(res) {
    debugger;
  })
