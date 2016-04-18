

// $.get('/grants')
//   .done(function(res) {
//     var myObj = JSON.stringify(res);
//     $.each(myObj, function(name, value) {
//       // var theData = value.grants;
//       debugger;
//       console.log(value);
//     });
//   })

$.get('/grants')
  .done(function(res) {
    var grants = res.data.grants;
    var ul = $('<ul></ul>');
    // $.each(grants[0], function(name, value) {
    //   theArray.push(name + ":" + value)
    // });
    // $('#list-view').append(theArray);


    grants.forEach(function(grant) {
      debugger;
      var li = $('<li></li>');
      // var divId = $('<div>' + grant['Id'] + '</div>');
      var divName = $('<div>' + grant[Title] + '</div>');
      debugger;
      li.append(divId).append(divName);
      ul.append(li);
    })


    // grants.forEach(function(grant) {
    //   debugger;
    //   var anotherVar = grant.title;
    // });


    $('#list-view').append(ul);

    // var theArray = [];
    // for (var i = 0; i < grants.length; i++) {
    //   // debugger;
    //   theArray.push(grants[i]);
    //   console.log(grants[i]);
    //   alert(theArray);
    // }

    // for(index in myObj) {
    //   var myJSON = myObj[index];
    //       debugger;
    //   console.log(myJSON);
    // }
  })




// var applicants = $.get('https://internalgrantdev.azurewebsites.net/api/mgrants/');
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



// $.ajax({
//   url: 'https://internalgrantdev.azurewebsites.net/api/Grants/',
//   method: 'GET',
//   contentType: 'application/json',
//   error: function() {
//      $('#list-view').html('<p>An error has occurred</p>');
//   },
//   success: function(data) {
//     //  var $title = data.title;
//      console.log(JSON.parse(data));
//     //  $('#list-view')
//     //     .append($title)
//   }
// });








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
