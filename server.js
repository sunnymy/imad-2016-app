var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var count=0;
 
 app.get('/',function(req, res) {
     count = count + 1;
     var span = document.getElementById('count');
     span.innerHTML = count.toString();
 });
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/sun.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sun.jpg'));
});

app.get('/ui/fb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.jpg'));
});

app.get('/ui/twit.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twit.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
