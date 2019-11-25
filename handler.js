'use strict';
var controller = require('./src/controllers/Status');

module.exports.getLiveStatus = (event, context, callback) => {
  //const response = controller.getLiveStatus();
  const response = {
    statusCode: 200,
    body: JSON.stringify({ live: true, liveAsOf: '2019-11-25T04:17:34Z' })
  };
  context.succeed(response);
};