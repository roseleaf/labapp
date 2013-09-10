// Labapp.Store = DS.Store.extend({
//     adapter: DS.FixtureAdapter
// });

DS.RESTAdapter.reopen({
  host: 'http://zenlabsbeta.herokuapp.com',
  namespace: 'api/v1'  
});
Labapp.Store = DS.Store.extend({
  adapter: DS.RESTAdapter
});

// Labapp.Store = DS.Store.extend({
//   revision: 12,
//   adapter: 'DS.FixtureAdapter'
// });