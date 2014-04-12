module.exports = function () {
	var mongoose = require('mongoose');
	var modelsDir = [ this.get('root'), '/app/models' ].join('');
	switch (this.env) {
		case 'development':
			mongoose.connect('mongodb://localhost:27017');
			break;
		case 'production':
			mongoose.connect('mongodb://localhost/prod');
			break;
	}
	global.QM = {
		Commodity:   require([ modelsDir, '/qm/commodity'].join('')),
		Household:   require([ modelsDir, '/qm/household'].join('')),
		Stock:       require([ modelsDir, '/qm/stock'].join('')),
		Transaction: require([ modelsDir, '/qm/transaction'].join(''))
	};
	global.User = require([ modelsDir, '/user'].join(''));
};
