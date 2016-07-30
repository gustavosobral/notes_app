var angular         = require('angular');
var uiRouter        = require('angular-ui-router');
var textAngular     = require('textangular');

var home    = require('home');
var note    = require('note');

var Routes   = require('./routes.js');

require('textangular/dist/textAngular-sanitize.min');
var app = angular.module('notesApp', [
  home, note, uiRouter, textAngular
]);

app.config(Routes);
