import moment from 'moment';
import { getFilters } from './filters';
import { sortNotes, getNotes } from './notes';

//? Generate the DOM structure for a note
const generatedNoteDOM = (note) => {
  const noteEl = document.createElement('a');
  const textEl = document.createElement('p');
  const statusEl = document.createElement('p');

  // Setup the link
  noteEl.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.classList.add('list-item');

  // Create the note title text
  if (note.title.trim().length) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }
  textEl.classList.add('list-item__title');
  noteEl.appendChild(textEl);

  // Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add('list-item__subtitle');
  noteEl.appendChild(statusEl);

  return noteEl;
};

//? Render notes based on filters
const renderNotes = () => {
  const notesEl = document.querySelector('#notes');
  // clear all notes on screen
  notesEl.innerHTML = '';

  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
  // new array of filtered notes
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
  // display (filtered) list of notes (or message if there are none)
  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generatedNoteDOM(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No notes to show';
    emptyMessage.classList.add('empty-message');
    notesEl.appendChild(emptyMessage);
  }
};

const initializeEditPage = (noteId) => {
  const titleEl = document.querySelector('#note-title');
  const bodyEl = document.querySelector('#note-body');
  const dateEl = document.querySelector('#last-edited');

  // fetch all notes from local storage
  const notes = getNotes();
  // retrieve note that matches hash id
  const note = notes.find((note) => note.id === noteId);

  // if it doesn't exist return user to homepage
  if (!note) {
    location.assign('/index.html');
  }

  titleEl.value = note.title;
  bodyEl.value = note.body;
  dateEl.textContent = generateLastEdited(note.updatedAt);
};

//? Generate 'Last edited...' message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`;
};

export { generatedNoteDOM, renderNotes, generateLastEdited, initializeEditPage };
