var express = require('express');
var app = express();
var http = require('http').Server(app);
var request = require('request');
var contador = 0;
var contador2 = 0;

app.get('/', function(req, res){
    res.sendfile('index.html');
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

var i = 0;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function send(){
	request('http://new.dataesy.com/insta/send.php', function (error, response, body) {
		contador++;
		console.log(contador);
		setTimeout(function(){
			send();
		}, getRndInteger(10000, 25000));
	});
}
send();