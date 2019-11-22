'use strict';

var utils = require('../utils/writer.js');
var Status = require('../service/StatusService');

module.exports.getLiveStatus = function getLiveStatus (req, res, next) {
  Status.getLiveStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
