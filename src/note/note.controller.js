function NoteController($log, $stateParams, NotesappService) {
  var vm = this;
  vm.note = {};

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
      });
  }

  function saveNote() {
    console.log('Saved');
  }

  function excludeNote() {
    console.log('Exlude');
  }
}

module.exports = NoteController;
