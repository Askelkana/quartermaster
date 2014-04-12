;
(function () {
	var mongoose = require('mongoose');
	var Transaction = mongoose.model('Transaction', new mongoose.Schema({
		date:     {
			default: Date.now,
			type:    Date
		},
		quantity: {
			required: true,
			type:     Number
		},
		stock:    {
			index:    true,
			ref:      'Stock',
			required: true,
			type:     mongoose.Schema.ObjectId
		}
	}));
	module.exports = Transaction;
})();