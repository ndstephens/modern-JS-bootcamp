import { createNote } from './notes';
import { setFilters } from './filters';
import { renderNotes } from './views';

// init display of notes
renderNotes();

document.querySelector('#create-note').addEventListener('click', (e) => {
  // create the note and capture its 'id'
  const id = createNote();
  // redirect to edit page for new note
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderNotes();
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
  setFilters({
    sortBy: e.target.value,
  });
  renderNotes();
});

// watch for changes to Local Storage data (from other windows or tabs), KEEPS ALL WINDOWS AND TABS IN SYNC
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    // re-render page with new 'notes' array data
    renderNotes();
  }
});
