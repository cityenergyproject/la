require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    d3: 'lib/d3',
    templates: '../templates'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});
