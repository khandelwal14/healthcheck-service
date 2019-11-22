'use strict';

const moment = require("momemt");


/**
 * gets the status of microservice itself
 *
 * returns liveStatus
 **/
exports.getLiveStatus = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "live" : true,
  "liveAsOf" : momemt().utc().format("YYYY-MM-DDTHH:mm:ss") + "Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

