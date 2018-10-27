import { initializeEditPage, generateLastEdited } from './views';
import { updateNote, removeNote } from './notes';

const titleEl = document.querySelector('#note-title');
const bodyEl = document.querySelector('#note-body');
const removeEl = document.querySelector('#remove-note');
const dateEl = document.querySelector('#last-edited');
// get note's id from the URL hash (removing the # symbol)
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleEl.addEventListener('input', (e) => {
  // save input value to note as you type
  const note = updateNote(noteId, {
    title: e.target.value,
  });
  dateEl.textContent = generateLastEdited(note.updatedAt);
});

bodyEl.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    body: e.target.value,
  });
  dateEl.textContent = generateLastEdited(note.updatedAt);
});

removeEl.addEventListener('click', (e) => {
  removeNote(noteId);
  location.assign('/index.html');
});

// will update/sync all windows/tabs when data is changed in another window/tab by listening for changes to the data in local storage
window.addEventListener('storage', (e) => {
  // only interested in the 'notes' key in local storage (there could be others)
  if (e.key === 'notes') {
    initializeEditPage(noteId);
  }
});
