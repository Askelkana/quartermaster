var mongoose = require('mongoose');
var Household = mongoose.model('Household', new mongoose.Schema({
	_id:       mongoose.Schema.ObjectId,
	name:      {
		required: true,
		type:     String
	},
	owner:     {
		index:    true,
		ref:      'User',
//		required: true,
		type:     mongoose.Schema.ObjectId
	},
	locations: [ String ]
}));
module.exports = Household;
