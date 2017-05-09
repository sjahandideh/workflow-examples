'use strict';

module.exports.workflow = (event, context, callback) => {
  console.log 'workflow v1 here';

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Workflow V1 executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
