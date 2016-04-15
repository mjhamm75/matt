var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser')

var app = express();

var GRANT_URL = 'https://internalgrantdev.azurewebsites.net/api/Grants';

app.use(bodyParser.json());
app.use(__dirname, express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
})

app.get('/heartbeat', function(req, res) {
  res.json({
    is: 'working'
  })
})

app.get('/grants', function(req, res) {
  axios.get(`${GRANT_URL}`)
    .then(result => {
      res.json({
        grants: result.data
      })
    })
    .catch(err => console.log(err));
})

app.get('/grants/:id', function(req, res) {
  var id = req.params.id;
  axios.get(`${GRANT_URL}/${id}`)
    .then(result => {
      res.json({
        grants: result.data
      })
    })
})

app.post('/grants', function(req, res) {
  var body = req.body;
  axios.post('https://internalgrantdev.azurewebsites.net/api/Grants/', body)
    .then(result => {
      res.json({
        grant: result.data
      })
    })
})

app.put('/grants/:id', function(req, res) {
  var body = req.body;
  axios.post(`https://internalgrantdev.azurewebsites.net/api/Grants/${id}`, body)
    .then(result => {
      res.json({
        grant: result.data
      })
    })
})

app.delete('/grants/:id', function(req, res) {
  var id = req.params.id;
  axios.delete(`https://internalgrantdev.azurewebsites.net/api/Grants/${id}`)
    .then(result => {
      res.json({
        grant: result.data
      })
    })
})

app.listen(3000, function() {
  console.log('is listening');
})
