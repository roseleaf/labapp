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