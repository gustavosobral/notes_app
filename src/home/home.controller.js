function HomeController($log, NotesappService) {
  var vm = this;
  vm.notes = [];

  initialize();

  // Controller initailization
  function initialize() {
    getNotes();
  }

  function getNotes() {
    NotesappService.getNotes()
      .then(function(notes) {
        vm.notes = notes;

        // Parse note status into Font Awesome icons
        for (var i = notes.length - 1; i >= 0; i--) {
          switch(notes[i].status) {
            case 'active':
              vm.notes[i].faClass = 'fa-bolt';
              break;
            case 'inactive':
              vm.notes[i].faClass = 'fa-ban';
              break;
            case 'draft':
              vm.notes[i].faClass = 'fa-pencil';
          }          
        }
    });
  }
}

module.exports = HomeController;
