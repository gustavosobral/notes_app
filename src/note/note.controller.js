function NoteController($log, $state, $stateParams, NotesappService) {
  var vm = this;
  vm.note = {};
  vm.noteStatus = "Ativa";

  vm.apiStatus = {};
  vm.apiStatus['Ativa'] = 'active';
  vm.apiStatus['Inativa'] = 'inactive';
  vm.apiStatus['Rascunho'] = 'draft';

  vm.viewStatus = {};
  vm.viewStatus['active'] = 'Ativa';
  vm.viewStatus['inactive'] = 'Inativa';
  vm.viewStatus['draft'] = 'Rascunho';

  vm.saveNote = saveNote;
  vm.excludeNote = excludeNote;

  initialize();

  function initialize() {
    if($stateParams.id)
      getNote($stateParams.id);
  }

  function getNote(id) {
    NotesappService.getNote(id)
      .then(function(note) {
        vm.note = note;
        vm.note.first_seen = new Date(note.first_seen);
        vm.note.first_seen = vm.note.first_seen.toString();
        vm.noteStatus = vm.viewStatus[vm.note.status];
    });
  }

  function saveNote() {
    if(vm.note.id) {
      console.log('Updated');
    } else {
      vm.note.status = vm.apiStatus[vm.noteStatus];
      console.log(vm.note);
      NotesappService.createNote(vm.note)
        .then(function() {
          $state.go('home');
      });
    }
  }

  function excludeNote() {
    NotesappService.deleteNote(vm.note.id)
      .then(function() {
        $state.go('home');
    });
  }
}

module.exports = NoteController;
