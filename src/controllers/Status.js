'use strict';

var utils = require('../utils/writer.js');
var Status = require('../service/StatusService');

module.exports.getLiveStatus = function getLiveStatus (req, res, next) {
  Status.getLiveStatus()
    .then(function (response) {
		console.log ("response", response)
      return (response);
    })
    .catch(function (response) {
		console.log ("response", response)
      return (response);
    });
};
