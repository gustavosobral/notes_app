function HomeController($log, $state, $stateParams, NotesappService) {
  var vm = this;
  vm.notes = [];
  vm.pages = [];
  vm.modalNote;  

  vm.goNote = goNote;
  vm.getNotes = getNotes;
  vm.goFirstPage = goFirstPage;
  vm.goLastPage = goLastPage;
  vm.openModal = openModal;

  initialize();

  // Controller initailization
  function initialize() {
    getNotes($stateParams.q, 1);
  }

  function getNotes(q, page) {
    NotesappService.getNotes(q, page)
      .then(function(response) {
        vm.notes = response.data;

        // Parse note status into Font Awesome icons
        for (var i = vm.notes.length - 1; i >= 0; i--) {
          switch(vm.notes[i].status) {
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

        // Calculate the number of pages to paginate based on response headers
        qtPages = Math.ceil(response.headers('Total')/response.headers('Per-Page'));
        for(var i = 1; i <= qtPages; i++) {
          vm.pages.push(i);
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

  function goFirstPage() {
    getNotes('', 1);
  }

  function goLastPage() {
    getNotes('', vm.pages[vm.pages.length - 1]);
  }

  function openModal(note) {
    vm.modalNote = note;
    NotesappService.getNote(note.id);
  }
}

module.exports = HomeController;
