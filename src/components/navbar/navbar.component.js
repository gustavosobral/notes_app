var navbarTemplate = require('./navbar.template.html');

function NavbarComponent() {
  return {
    restrict: 'E',
    templateUrl: navbarTemplate,
    controller: NavbarComponentController,
    controllerAs: 'navbarCtrl'
  }

  function NavbarComponentController($state) {
    var vm = this;
    vm.query;

    vm.searchNote = searchNote;

    // Pass a user full text query through URL
    function searchNote() {
      $state.go('home', { q: vm.query });
    }
  }
}

module.exports = NavbarComponent;
