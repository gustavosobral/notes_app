var angular   = require('angular');
var services  = require('services');

var note = angular.module('notesApp.note', [services]);

var NoteController = require('./note.controller.js');
note.controller('NoteController', NoteController);

module.exports = note.name;
