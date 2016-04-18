var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser')

var app = express();

var GRANT_URL = 'http://internalgrantdev.azurewebsites.net/api/MGrants';

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/heartbeat', function(req, res) {
  res.json({
    is: 'working'
  })
})
// var data = require('./mock/mock-grants');
app.get('/MGrants', function(req, res) {
  // res.json({
  //   data: data
  // });

  axios.get(`${GRANT_URL}`)
    .then(result => {
      res.json({
        grants: result.data
      })
    })
    .catch(err => console.log(err));
})

app.get('/MGrants/:id', function(req, res) {
  // res.json({
  //   data: data[0]
  // })
  var id = req.params.id;
  axios.get(`${GRANT_URL}/${id}`)
    .then(result => {
      res.json({
        grants: result.data
      })
    })
})

app.post('/MGrants', function(req, res) {
  var body = req.body;
  axios.post(`${GRANT_URL}`, body)
    .then(result => {
      res.json({
        grant: result.data
      })
    })
})

app.put('/MGrants/:id', function(req, res) {
  var body = req.body;
  axios.post(`${GRANT_URL}/${id}`, body)
    .then(result => {
      res.json({
        grant: result.data
      })
    })
})

app.delete('/MGrants/:id', function(req, res) {
  var id = req.params.id;
  axios.delete(`${GRANT_URL}/${id}`)
    .then(result => {
      res.json({
        grant: result.data
      })
    })
})

app.listen(3001, function() {
  console.log('is listening');
})
