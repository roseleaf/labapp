(function() {

var Labapp = window.Labapp = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Labapp.ExtensionEditController = Ember.ObjectController.extend({
  save: function(){
    // we're cheating here that there's no commit()
    // but the UI element is already bound to the model
    this.transitionToRoute('extension',this.get('model'));
  }
});



})();

(function() {

Labapp.ExtensionsController = Ember.ObjectController.extend({
  // Implement your controller here.
});



})();

(function() {

// Labapp.Store = DS.Store.extend({
//     adapter: DS.FixtureAdapter
// });

DS.RESTAdapter.reopen({
  host: 'http://zenlabs_beta.dev',
  namespace: 'api/v1'  
});
Labapp.Store = DS.Store.extend({
  adapter: DS.RESTAdapter
});

// Labapp.Store = DS.Store.extend({
//   revision: 12,
//   adapter: 'DS.FixtureAdapter'
// });

})();

(function() {

Labapp.Extension = DS.Model.extend({
    name: DS.attr('string'),
    downloadUrl: DS.attr('string'),
    shortDescription: DS.attr('string'),
    notes: DS.attr('string'),
    category: DS.attr('string'),
    zdInterface: DS.attr('string'),
    authorType: DS.attr('string'),
    icon: DS.attr('string')
});

// probably should be mixed-in...
Labapp.Extension.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    console.log("model ", model);
    // $.each(Em.A(Ember.keys(this.get('data.attributes'))), function(idx, key){
    //   var pair = { key: key, value: model.get(key) };
    //   attrs.push(pair);
    // });
    // return attrs;
    $.each(model._data, function(key, el){
      var pair = { key: key, value: el };
      attrs.push(pair);
    });
    return attrs;

  }.property()
});

// delete below here if you do not want fixtures
Labapp.Extension.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    download_url: 'foo',
    
    short_description: 'foo',
    
    notes: 'foo',
    
    category: 'foo',
    
    zd_interface: 'foo',
    
    author_type: 'foo',
    
    icon: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    download_url: 'foo',
    
    short_description: 'foo',
    
    notes: 'foo',
    
    category: 'foo',
    
    zd_interface: 'foo',
    
    author_type: 'foo',
    
    icon: 'foo'
    
  }
  
];


})();

(function() {

Labapp.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

Labapp.ExtensionEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('extension', params.extension_id);
  }  
});



})();

(function() {

// Labapp.ExtensionRoute = Ember.Route.extend({
//   model: function(model) {
//     // return Labapp.Extension.find(model.extension_id);
// 	return this.store.find('extension', model.id);    
//   }
// });

Labapp.ExtensionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('extension', params.extension_id);
  }
});

})();

(function() {

Labapp.ExtensionsRoute = Ember.Route.extend({
  model: function() {
	return this.store.find('extension');
  }
});



})();

(function() {

Labapp.GetstartedRoute = Ember.Route.extend({
	events: {
		selectTab: function(name) {
			this.render(name, { into: 'getstarted', outlet: 'maintab' });
			this.controller.setActiveTab();
    	},
    	willTransition: function() {
    		this.controller.setActiveTab();
    	}
	},

	renderTemplate: function(){
		this.render();
		this.render('startside', {into: 'application', outlet: 'startNav'});
		this.render('privateapps', {into: 'getstarted', outlet: 'maintab'});
	},
	setupController: function(controller){
		controller.set('setActiveTab', function(){
    		$('#directionsType a').click(function(){
	      		$('.active').removeClass('active');
	      		$(this).addClass('active');
	    	});
	  	});
	}
});

})();

(function() {

Labapp.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('home');
  }
});

})();

(function() {

Labapp.BoundTextFieldView = Ember.TextField.extend({
  valueBinding: 'content.value',
  contentChanged: function() {
    this.get('controller').get('model').set(
      this.get('content').key,
      this.get('content').value
    ); // ugly, but gets the job done
  }.observes('content.value')
});


})();

(function() {

Labapp.ExtensionEditView = Ember.View.extend({
    templateName: 'extension_edit'
});


})();

(function() {

Labapp.ExtensionView = Ember.View.extend({
    templateName: 'extension',
	showModal: function(){
		modal: this.createChildView(Ember.View.create({
			templateName: 'disclaimer',
			controller: this.controller,
			dismissModal: function(){
				this.remove();
				$('#overlay').fadeOut(700);
			}
		})).appendTo('body');
		$('#overlay').fadeIn(700);
	}
});

})();

(function() {

Labapp.ExtensionsEditView = Ember.View.extend({
    templateName: 'extensions_edit'
});


})();

(function() {

Labapp.ExtensionsView = Ember.View.extend({
    templateName: 'extensions'
});


})();

(function() {

Labapp.Router.map(function () {
  this.route("home", {path: "index"});  
  this.route("getstarted");

  this.resource('extension_edit');
  this.resource('extension_edit', { path: '/extension_edit/:extension_edit_id' });
  this.resource('extension_edit.edit', { path: '/extension_edit/:extension_edit_id/edit' });
  
  this.resource('extensions');
  this.resource('extension', { path: '/extension/:extension_id' });
  this.resource('extension.edit', { path: '/extension/:extension_id/edit' });
  
});


// App.Router.map(function() {
//   this.route("home", {path: "index"});  
//   this.resource('extensions', function() {
//     this.route('edit');
//     this.route('new');
//   });
//   this.resource('extension', { path: '/:extension_id'});

// });



})();