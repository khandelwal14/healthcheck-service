'use strict';


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
  "liveAsOf" : "2017-12-07t15:12:22z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

