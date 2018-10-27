import uuidv4 from 'uuid/v4';
import moment from 'moment';

let notes = [];

//? Fetch existing notes from Local Storage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  // if the JSON data in local storage is invalid then catch the error and return an empty array
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};

//? Save notes to local storage (sync with the 'notes' array)
const saveNotesLS = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

//? Expose notes from module
const getNotes = () => notes;

//? Create and save a new note
const createNote = () => {
  const id = uuidv4();
  const timestamp = moment().valueOf();

  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotesLS();

  // return the id so it can be used after note creation
  return id;
};

//? Remove note from 'notes' array (saveNotesLS() will update/sync Local Storage)
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotesLS();
  }
};

//? Sort notes by one of three options
const sortNotes = (sortBy) => {
  return notes.sort((a, b) => {
    switch (sortBy) {
      case 'byEdited':
        return b.updatedAt - a.updatedAt;
      case 'byCreated':
        return b.createdAt - a.createdAt;
      case 'alphabetical':
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      default:
        return 0;
    }
  });
};

const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return;
  }

  if (typeof updates.title === 'string') {
    note.title = updates.title;
    note.updatedAt = moment().valueOf();
  }
  if (typeof updates.body === 'string') {
    note.body = updates.body;
    note.updatedAt = moment().valueOf();
  }

  saveNotesLS();
  return note;
};

//? Load notes from Local Storage (if they exist) at start of application
notes = loadNotes();

export { getNotes, createNote, removeNote, sortNotes, updateNote };
