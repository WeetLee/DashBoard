var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/dashboard');

var Schema = mongoose.Schema;
var Event = new Schema({
  name: { type: String },
  date: { type: Number, min: 101, max: 1231, index: true },
  year: { type: Number },
  comment: { type: String }
});
var MyEvent = mongoose.model('Event', Event);

var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/rest/event/', function(req,res) {
	var date = new Date();
	var intDate = (date.getMonth() + 1) * 100 + date.getDate();
	MyEvent.find({date:{$gt: intDate-1, $lt: intDate + 100}}, function (err, docs) {
		res.send(docs);
	});
});

app.get('/rest/event/:date', function(req,res) {
	var intDate = req.params.date;
	MyEvent.find({date:{$gt: intDate-1, $lt: intDate + 100}}, function (err, docs) {
		res.send(docs);
	});
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);

});
