function NoteController($log, $state, $stateParams, NotesappService) {
  var vm = this;
  vm.note = {};
  vm.noteStatus = "Ativa";

  // Hashs for view-api 'status' conversion
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

  // Controller initailization
  function initialize() {
    jQuery('#note-alert').hide();

    // Go try to get a note if there is a passed 'id' param
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
      })
      .catch(function(e) {
        $state.go('home');
      });
  }

  function saveNote() {
    vm.note.status = vm.apiStatus[vm.noteStatus];

    // Show warning alert on user invalid input
    if(!vm.note.title || !vm.note.body) {
      jQuery('#note-alert').show();
      return;
    }

    // If a note have id
    if(vm.note.id) {
      // Update a existing note
      NotesappService.updateNote(vm.note)
        .then(function() {
          $state.go('home');
        })
        .catch(function(e) {
          $state.go('home');
        });
    } else {
      // Create a new one
      NotesappService.createNote(vm.note)
        .then(function() {
          $state.go('home');
        })
        .catch(function(e) {
          $state.go('home');
        });
    }
  }

  function excludeNote() {
    // User exclude intention confirmation
    if(!window.confirm("Tem certeza que deseja excluir essa anotação?"))
      return;

    NotesappService.deleteNote(vm.note.id)
      .then(function() {
        $state.go('home');
      })
      .catch(function(e) {
        $state.go('home');
      });;
  }
}

module.exports = NoteController;
