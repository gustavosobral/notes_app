function HomeController($log, $state, $stateParams, NotesappService) {
  var vm = this;
  vm.notes = [];
  vm.modalNote;

  vm.goNote = goNote;
  vm.openModal = openModal;

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
      })
      .catch(function(e) {
        // TODO: Handle API error (Using alerts)
        $state.go('home');
      });
  }

  function goNote(id) {
    $state.go('note', { id: id });
  }

  function openModal(note) {
    vm.modalNote = note;
    NotesappService.getNote(note.id);
  }
}

module.exports = HomeController;
