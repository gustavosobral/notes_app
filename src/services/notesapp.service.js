function NotesappService($http, $log) {
  var url = 'http://138.68.11.67/notes';

  return {
    getNotes: getNotes,
    getNote: getNote
  };

  function getNotes(q) {
    return $http.get(url + '?q=' + q)
      .then(getNotesComplete)
      .catch(getNotesFailed);

    function getNotesComplete(response) {
      return response.data;
    }

    function getNotesFailed(error) {
      $log.error('Failed for getNotes' + error.data);
    }
  }

  function getNote(id) {
    return $http.get(url + '/' + id)
      .then(getNoteComplete)
      .catch(getNoteFailed);

    function getNoteComplete(response) {
      return response.data;
    }

    function getNoteFailed(error) {
      $log.error('Failed for getNote' + error.data);
    }
  }
}

module.exports = NotesappService;
