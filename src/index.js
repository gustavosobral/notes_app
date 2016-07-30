var angular   = require('angular');
var uiRouter  = require('angular-ui-router');

var home    = require('home');
var note    = require('note');

var Routes   = require('./routes.js');

var app = angular.module('notesApp', [
  home, note, uiRouter
]);

app.config(Routes);
