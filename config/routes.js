module.exports = function routes() {
	this.root('pages#main');

	this.resource('user');

	this.namespace('qm', function () {
		this.resources('household', {
			except: [ 'new', 'edit' ]
		}, function () {
			this.resources('commodity', {
				except: [ 'new', 'edit' ]
			});
			this.get('commodity/:id/stock', 'commodity#stock');
			this.get('commodity/:id/transactions', 'commodity#transactions');
			this.put('commodity/:id/deposit', 'commodity#deposit');
			this.put('commodity/:id/withdraw', 'commodity#withdraw');
		});
		this.put('household/:id/locations', 'household#locations');
	});
};
