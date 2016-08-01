var angular   = require('angular');
var services  = require('services');

var navbar = require('components/navbar');

var home = angular.module('notesApp.home', [
  services, navbar
]);

var HomeController = require('./home.controller.js');
home.controller('HomeController', HomeController);

module.exports = home.name;
