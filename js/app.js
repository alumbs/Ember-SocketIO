App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
	name: '',
	shout: function() {
		return 'Hello ' + this.get('name').toUpperCase() + '!';
	}.property('name'),

	whisper: function(){

		return 'heyyyy ' + this.get('name').toLowerCase() + '...';
	}.property('name')
});