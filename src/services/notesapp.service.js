function NotesappService($http, $log) {
  var url = 'http://138.68.11.67/notes';

  return {
    getNotes: getNotes,
    getNote: getNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote
  };

  function getNotes(q) {
    return $http.get(url + '?q=' + q)
      .then(getNotesComplete)
      .catch(getNotesFailed);

    function getNotesComplete(response) {
      return response.data;
    }

    function getNotesFailed(error) {
      $log.error('Failed for getNotes: ' + error.data);
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
      $log.error('Failed for getNote: ' + error.data);
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

    function createNoteFailed(error) {
      $log.error('Failed for createNote: ' + error.data);
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

    function updateNoteFailed(error) {
      $log.error('Failed for updateNote: ' + error.data);
    }
  }

  function deleteNote(id) {
    return $http.delete(url + '/' + id)
      .then(deleteNoteComplete)
      .catch(deleteNoteFailed);

    function deleteNoteComplete(response) {
      $log.info('Note deleted successfully!');
    }

    function deleteNoteFailed(error) {
      $log.error('Failed for deleteNote: ' + error.data);
    }
  }
}

module.exports = NotesappService;
