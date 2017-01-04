const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// for debug
app.get('/', function(req, res){
  res.send('This page is running on express.');
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Authorization, Accept, content-type');
  next();
});

app.listen(3100);
console.log('express listen start');