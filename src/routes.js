var homeTemplate = require('home/home.template.html');
var noteTemplate = require('note/note.template.html');

function Routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: homeTemplate
    })
    .state('note', {
      url: "/note",
      templateUrl: noteTemplate
    })

}

module.exports = Routes
