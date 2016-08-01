function HomeController($log, $state, $stateParams, NotesappService) {
  var vm = this;
  vm.notes = [];

  vm.goNote = goNote;

  initialize();

  // Controller initailization
  function initialize() {
    getNotes($stateParams.q);
  }

  function getNotes(q) {
    NotesappService.getNotes(q)
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

  function goNote(id) {
    $state.go('note', { id: id });
  }
}

module.exports = HomeController;