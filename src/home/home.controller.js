function HomeController($log, NotesappService) {
  var vm = this;
  vm.notes = [];

  initialize();

  function initialize() {
    NotesappService.getNotes()
      .then(function(notes) {
        vm.notes = notes;
    });
  }  
}

module.exports = HomeController;
