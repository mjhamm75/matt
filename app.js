$.ajax('https://internalgrantdev.azurewebsites.net/api/Grants', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .done(function(restResult) {
    console.log(restResult.films);
  })
