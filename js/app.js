App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
	model: [
		{name: 'Galaxy s5', cost: 599.99},
		{name: 'Nexus 5', cost: 69.99},
		{name: 'iPhone 5s', cost: 399.99}
	],
	totalCost: function() {
		var total = 0;
		this.get('model').forEach(function(phone){
			total += phone['cost'];
		});

		return total;
	}.property('model')
});