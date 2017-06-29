'use strict';
var Task = require("./task.js");

function getRandomFlag() {
	return Math.floor(Math.random() * 2) == 1;
}

module.exports.call = (event, context, callback) => {
	var tasks = [];
	var result = 'S';

	event.tasks.forEach(function(taskName){

		let task = new Task(taskName, getRandomFlag());
		let result = task.run();
		tasks.push(result);

		if (task.required == true && result == 'F') {
			result = 'F';
		}
	});

	let outputState = function(tasks) {
		return tasks;
	};

	const response = {
		statusCode: 200,
		body: JSON.stringify({
		  message: outputState(tasks),
		  input: event,
		  output: result
		}),
	};

	callback(null, response);
};
