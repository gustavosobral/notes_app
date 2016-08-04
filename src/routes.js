var homeTemplate = require('home/home.template.html');
var noteTemplate = require('note/note.template.html');

function Routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  // 'home' route accept a query 'q' as parameter
  // 'note' route recieve a note id 'id' as parameter
  $stateProvider
    .state('home', {
      url: "/{q}",
      templateUrl: homeTemplate,
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .state('note', {
      url: "/note/{id}",
      templateUrl: noteTemplate,
      controller: 'NoteController',
      controllerAs: 'noteCtrl'
    })
}

module.exports = Routes
