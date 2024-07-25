import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const handleAddOrEditNote = (note) => {
    const updatedNotes = currentNote
      ? notes.map(n => (n.id === currentNote.id ? note : n))
      : [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setCurrentNote(null);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter(n => n.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <NoteForm onSubmit={handleAddOrEditNote} currentNote={currentNote} />
      <input
        type="text"
        placeholder="Search notes"
        value={search}
        onChange={handleSearch}
        className="border border-gray-300 p-2 rounded-md mb-4 w-full"
      />
      <NoteList
        notes={filteredNotes}
        onEdit={(note) => setCurrentNote(note)}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default Home;
