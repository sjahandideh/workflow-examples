"use strict";

var fn = require("./workflow.js");
var event = {
	"tasks": ["book venue", "order cake", "hire waiter"]
};

fn.call(event, {}, function(err, data) {

	if(err) {
		console.log("error: ", err);
	} else {
		console.log("data: ", data);
	}

});
