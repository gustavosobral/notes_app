function NotesappService($http, $q, $log) {
  var url = 'http://138.68.11.67/api/v1/notes';

  return {
    getNotes: getNotes,
    getNote: getNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote
  };

  function logError(e, errorMessage) {
    if(e.data && e.data.error)
        errorMessage = errorMessage + ' "' + e.data.error + '"'
    $log.error(errorMessage);
  }

  function getNotes(q, page) {
    if(q) {
      getUrl = url + '?q=' + q;
    } else {
      getUrl = url + '?page=' + page;
    }
    return $http.get(getUrl)
      .then(getNotesComplete)
      .catch(getNotesFailed);

    function getNotesComplete(response) {
      return response;
    }

    function getNotesFailed(e) {
      logError(e, 'Failed for getNotes!');
      return $q.reject(e);
    }
  }

  function getNote(id) {
    return $http.get(url + '/' + id)
      .then(getNoteComplete)
      .catch(getNoteFailed);

    function getNoteComplete(response) {
      return response.data;
    }

    function getNoteFailed(e) {
      logError(e, 'Failed for getNote!');
      return $q.reject(e);
    }
  }

  function createNote(note) {
    data = {}
    data.note = note;
    return $http.post(url, data)
      .then(createNoteComplete)
      .catch(createNoteFailed);

    function createNoteComplete(response) {
      $log.info('Note created successfully!');
    }

    function createNoteFailed(e) {
      logError(e, 'Failed for createNote!');
      return $q.reject(e);
    }
  }

  function updateNote(note) {
    data = {}
    data.note = note;
    return $http.put(url + '/' + note.id, data)
      .then(updateNoteComplete)
      .catch(updateNoteFailed);

    function updateNoteComplete(response) {
      $log.info('Note updated successfully!');
    }

    function updateNoteFailed(e) {
      logError(e, 'Failed for updateNote!');
      return $q.reject(e);
    }
  }

  function deleteNote(id) {
    return $http.delete(url + '/' + id)
      .then(deleteNoteComplete)
      .catch(deleteNoteFailed);

    function deleteNoteComplete(response) {
      $log.info('Note deleted successfully!');
    }

    function deleteNoteFailed(e) {
      logError(e, 'Failed for deleteNote!');
      return $q.reject(e);
    }
  }
}

module.exports = NotesappService;
