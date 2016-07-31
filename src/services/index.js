var angular = require('angular');

var services = angular.module('notesApp.services', []);

var NotesappService = require('./notesapp.service.js');
services.factory('NotesappService', NotesappService);

module.exports = services.name;
