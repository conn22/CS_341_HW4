//James Conn

var express = require('express');
var router = express.Router();

var stuff = {"data": [
	{ "topping":"plain", "quantity":"6" },
	{ "topping":"cherry", "quantity":"3" },
	{ "topping":"chocolate", "quantity":"4" }
	]
}; 

/* GET orders. */
router.get('/', function(req, res, next) {
	res.jsonp(stuff);
});


// Note: Something in this program seems to break and prevent Express
// 	 from functioning properly. I'm not sure if it's the object 
//	 declaration or the function call. 
