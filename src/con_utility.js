var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost', 
	user:'root', 
	password:'paxcel@123', 
	database:'express_demo'});


module.exports = connection;