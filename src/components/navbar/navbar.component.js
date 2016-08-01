var navbarTemplate = require('./navbar.template.html');

function NavbarComponent() {
  return {
    restrict: 'E',
    templateUrl: navbarTemplate,
    controller: NavbarComponentController,
    controllerAs: 'navbarCtrl'
  }

  function NavbarComponentController() {
    var vm = this;
  }
}

module.exports = NavbarComponent;
