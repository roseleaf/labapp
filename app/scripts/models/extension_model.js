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
