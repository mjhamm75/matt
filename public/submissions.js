
// var applicants = $.get('https://internalgrantdev.azurewebsites.net/api/Grants/');
// console.log(applicants);
// $(applicants).each(function(index, data) {
//   $('#list-view')
//   .append('Title: ' + data.title );
// });


// $.ajax({
//    url: 'https://internalgrantdev.azurewebsites.net/api/Grants/',
//    data: {
//       title: 'title'
//    },
//   //  debugger
//    contentType: 'application/json',
//    error: function() {
//       $('#list-view').html('<p>An error has occurred</p>');
//    },
//    success: function(data) {
//       var $title = data.${title};
//       console.log($title);
//       $('#list-view')
//          .append($title)
//    },
//    type: 'GET'
// });

$.ajax({
  url: 'https://internalgrantdev.azurewebsites.net/api/Grants/',
  method: 'GET',
  contentType: 'application/json',
  error: function() {
     $('#list-view').html('<p>An error has occurred</p>');
  },
  success: function(data) {
    //  var $title = data.title;
     console.log(JSON.parse(data));
    //  $('#list-view')
    //     .append($title)
  }
});








// $.each(applicants, function(index, data) {
//   $('#list-view').append(data.title);
// });

  // "Title",
  // "PI",
  // "College",
  // "Dept",
  // "ConferenceDate",
  // "Location",
  // "Purpose",
  // "Amount",
  // "Attendees",
  // "Hidden"



// $.ajax({
//   url: 'https://internalgrantdev.azurewebsites.net/api/Grants/',
//   method: 'GET',
//   dataType
//   data: {
//     "Title",
//     "PI",
//     "College",
//     "Dept",
//     "ConferenceDate",
//     "Location",
//     "Purpose",
//     "Amount",
//     "Attendees",
//     "Hidden"
//   }
// })
// .done(function (result) {
//   $('.clear-data').val('');
// })
// .error(function(err) {
//   alert('Something is not right');
// });
