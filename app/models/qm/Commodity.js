;
(function () {
	var mongoose = require('mongoose');
	var Commodity = mongoose.model('Commodity', new mongoose.Schema({
		_id:          mongoose.Schema.ObjectId,
		depositRate:  Number,
		expires:      Boolean,
		household:    {
			index:    true,
			ref:      'Household',
			required: true,
			type:     mongoose.Schema.ObjectId
		},
		locations:    [ String ],
		name:         {
			required: true,
			type:     String
		},
		unit:         String,
		withdrawRate: Number
	}));
	module.exports = Commodity;
})();