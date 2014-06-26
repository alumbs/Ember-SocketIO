App = Ember.Application.create({LOG_TRANSITIONS: true});

App.IndexController = Ember.Controller.extend({
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

App.Router.map(function(){
	this.resource('about');
});

App.AboutController = Ember.Controller.extend({
	setupController: function(){
		console.log('I am here');
	}
});