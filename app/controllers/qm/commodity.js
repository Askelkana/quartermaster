/*
 GET	/photos	index
 GET	/photos/new	new
 POST	/photos	create
 GET	/photos/:id	show
 GET	/photos/:id/edit	edit
 PUT	/photos/:id	update
 DELETE	/photos/:id	destroy
 */

var locomotive = require('locomotive');
var CommodityController = new locomotive.Controller();
module.exports = CommodityController;
var QM = global.QM;

CommodityController.index = function () {
	var householdID = this.params('household_id');
	var that = this;
	QM.Commodity
		.find({ 'household': householdID })
		.sort('name')
		.exec(function (err, commodities) {
			if (err === null) {
				that.res.json(commodities);
			} else {
				that.res.send(500, err.message);
			}
		});
};

