var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/yevana');
 
module.exports = connection;