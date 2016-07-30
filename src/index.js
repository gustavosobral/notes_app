var angular = require('angular');

var home = require('home');
var note = require('note');

var app = angular.module('notesApp', [
  home,note
]);
