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
var HouseholdController = new locomotive.Controller();
var QM = global.QM;
module.exports = HouseholdController;

Object.defineProperties(HouseholdController.prototype, {
	create:    {
		value: function () {
			var controller = this;
			QM.Household
				.create({
					locations: controller.params('locations') || [],
					name:      controller.params('name')
				}, function (err, household) {
					if (err === null) {
						controller.res.json(household);
					} else {
						controller.res.send(500, err.message);
					}
				});
		}
	},
	destroy:   {
		value: function () {
			var householdID = this.params('household_id');
			this.send();
		}
	},
	index:     {
		value: function () {
			var controller = this;
			var householdID = controller.params('household_id');
			QM.Household
				.find({ 'name': householdID })
				.sort('name')
				.exec(function (err, households) {
					if (err === null) {
						controller.res.json(households);
					} else {
						controller.res.send(500, err.message);
					}
				});
		}
	},
	locations: {
		value: function () {
			var controller = this;
			var householdID = controller.params('household_id');
			QM.Household
				.update({ _id: householdID }, {
					locations: controller.params('locations')
				}, function (err, household) {
					if (err === null) {
						controller.res.json(household);
					} else {
						controller.res.send(500, err.message);
					}
				});
		}
	},
	show:      {
		value: function () {
			var controller = this;
			var householdID = controller.params('household_id');
			QM.Household
				.findById(householdID, function (err, household) {
					if (err === null) {
						controller.res.json(household);
					} else {
						controller.res.send(500, err.message);
					}
				});
		}
	},
	update:    {
		value: function () {
			var controller = this;
			var householdID = controller.params('household_id');
			QM.Household
				.update({ _id: householdID }, {
					name: controller.params('name')
				}, function (err, household) {
					if (err === null) {
						controller.res.json(household);
					} else {
						controller.res.send(500, err.message);
					}
				});
		}
	}
});

