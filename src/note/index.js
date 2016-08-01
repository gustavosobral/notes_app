var angular   = require('angular');
var services  = require('services');

var navbar = require('components/navbar');

var note = angular.module('notesApp.note', [
  services, navbar
]);

var NoteController = require('./note.controller.js');
note.controller('NoteController', NoteController);

module.exports = note.name;
