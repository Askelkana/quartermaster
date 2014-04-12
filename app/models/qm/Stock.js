;
(function () {
	var mongoose = require('mongoose');
	var Stock = mongoose.model('Stock', new mongoose.Schema({
		_id:        mongoose.Schema.ObjectId,
		commodity:  {
			index:    true,
			ref:      'Commodity',
			required: true,
			type:     mongoose.Schema.ObjectId
		},
		quantity:   Number,
		expiryDate: Date
	}));
	module.exports = Stock;
})();