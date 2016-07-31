var homeTemplate = require('home/home.template.html');
var noteTemplate = require('note/note.template.html');

function Routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: homeTemplate,
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .state('note', {
      url: "/note",
      templateUrl: noteTemplate,
      controller: 'NoteController',
      controllerAs: 'noteCtrl'
    })
}

module.exports = Routes
