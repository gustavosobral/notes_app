var angular         = require('angular');
var uiRouter        = require('angular-ui-router');
var textAngular     = require('textangular');

var home  = require('home');
var note  = require('note');

var Routes = require('./routes.js');

require('assets/scss/styles.scss');
require('textangular/dist/textAngular-sanitize.min');

var app = angular.module('notesApp', [
  home, note, uiRouter, textAngular
]);

app.config(function($provide) {
  $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
    // Customize the textAngular toolbar
    taOptions.toolbar = [
      ['h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
      ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
      ['insertImage','insertLink', 'wordcount', 'charcount']
    ];
    return taOptions;
  }]);
})

app.config(Routes);
