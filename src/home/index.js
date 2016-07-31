var angular   = require('angular');
var services  = require('services');

var home = angular.module('notesApp.home', [services]);

var HomeController = require('./home.controller.js');
home.controller('HomeController', HomeController);

module.exports = home.name;
