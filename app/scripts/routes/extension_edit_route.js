Labapp.ExtensionEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('extension', params.extension_id);
  }  
});

