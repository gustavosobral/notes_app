var angular = require('angular');

var note = angular.module('notesApp.note', []);

var NoteController = require('./note.controller.js');
note.controller('NoteController', NoteController);

module.exports = note.name;
