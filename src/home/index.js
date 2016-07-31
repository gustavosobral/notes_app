var angular = require('angular');

var home = angular.module('notesApp.home', []);

var HomeController = require('./home.controller.js');
home.controller('HomeController', HomeController);

module.exports = home.name;
