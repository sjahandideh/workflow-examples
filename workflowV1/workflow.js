'use strict';
var Task = require("./task.js");

module.exports.call = (event, context, callback) => {
  var tasks = [];

  event.tasks.forEach(function(k){
    let t = new Task(k);
    tasks.push(t.name);
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Workflow V1 executed successfully!',
      input: event,
      output: tasks
    }),
  };

  callback(null, response);
};
