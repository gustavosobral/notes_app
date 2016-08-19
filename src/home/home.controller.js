function HomeController($log, $state, $scope, $stateParams, NotesappService, Flash) {
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
    // Get the Notes page 1 on startup
    getNotes($stateParams.q, 1);
  }

  function getNotes(q, page) {
    NotesappService.getNotes(q, page)
      .then(function(response) {
        vm.notes = response.data;

        for (var i = vm.notes.length - 1; i >= 0; i--) {
          // Format 'first_seen' date
          vm.notes[i].first_seen = new Date(vm.notes[i].first_seen);
          vm.notes[i].first_seen = vm.notes[i].first_seen.toString();

          // Parse note 'status' into Font Awesome class icons
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

        // Calculate the number of pages to paginate, based on response headers
        qtPages = Math.ceil(response.headers('Total')/response.headers('Per-Page'));
        vm.pages = [];
        for(var i = 1; i <= qtPages; i++) {
          vm.pages.push(i);
        }
      })
      .catch(function(e) {
        $scope.dangerAlert();
      });
  }

  function goNote(id) {
    $state.go('note', { id: id });
  }

  // Go to first paginated page
  function goFirstPage() {
    getNotes('', 1);
  }

  // Go to last paginated page
  function goLastPage() {
    getNotes('', vm.pages[vm.pages.length - 1]);
  }

  function openModal(note) {
    vm.modalNote = note;
    // Make a GET to increase Note views counter
    NotesappService.getNote(note.id);
  }

  $scope.dangerAlert = function() {
    var message = '<strong>Ocorreu um erro!</strong> Por favor, tente novamente mais tarde.';
    Flash.create('danger', message);
  }
}

module.exports = HomeController;
