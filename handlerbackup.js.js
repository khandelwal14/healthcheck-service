// server.js// beforerequire('dotenv').config({ path: './variables.env' });
var app = require('./src/app');var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
// afterrequire('dotenv').config({ path: './variables.env' });
var app = require('./src/app');var serverless = require('serverless-http');
module.exports.handler = serverless(app);