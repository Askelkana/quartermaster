;
(function () {
	var mongoose = require('mongoose');
	var User = mongoose.model('User', new mongoose.Schema({
		_id:       mongoose.Schema.ObjectId,
		email:    String,
		name:     String,
		password: String,
		roles:    [ String ]
	}));
	module.exports = User;
})();